import React, { createContext, useContext, ReactNode } from 'react';
import { User } from '@/types/user';

interface UserContextValue {
    user: User;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
    user: User;
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ user, children }) => {
    return <UserContext.Provider value={{ user, isAuthenticated: !!user }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextValue => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
