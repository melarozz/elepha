import React, { useCallback } from 'react';
import { NavigationAction, NavigationContainer, NavigationContainerProps } from '@react-navigation/native';

import RootNavigator from './RootNavigator';
import linkingConfiguration from './linkingConfiguration';

const Navigation = () => {
    const onUnhandledAction: NavigationContainerProps['onUnhandledAction'] = useCallback((action: NavigationAction) => {
        console.log('action', action);
        console.error('onUnhandledAction NavigationContainer');
    }, []);

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            onUnhandledAction={onUnhandledAction}
        >
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;

