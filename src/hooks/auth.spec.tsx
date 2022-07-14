import { renderHook, act } from '@testing-library/react-hooks';
import { startAsync } from 'expo-auth-session';
import { mocked } from 'ts-jest/utils';
import { AuthProvider, useAuth } from './auth';

jest.mock('expo-auth-session');

describe('Auth Hook', () => {
  it('should not connect if cancel authentication with Google', async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: 'cancel'
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty('id');
  });

  it('should be able to sign in with Google account existing', async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: 'success',
      params: {
        access_token: 'google-token'
      }
    });

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        id: 'any_id',
        email: 'andre.kunde@zup.com.br',
        name: 'André',
        photo: 'any_photo.png',
      }),
    })) as jest.Mock;

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email)
    .toBe('andre.kunde@zup.com.br');
  });
});