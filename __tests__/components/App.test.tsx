import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from "../../src/App"; // Assuming App.tsx is in the same directory

describe('App', () => {
    it('renders correctly', async () => {
        const { getByText } = render(<App />);

        // Check if the text 'Home' is present, indicating that the Home screen is rendered
        const homeScreenText = getByText('Home');
        expect(homeScreenText).toBeDefined();

        // Simulate navigation to the 'About' screen by pressing the 'About' button
        const aboutButton = getByText('About');
        fireEvent.press(aboutButton);

        // Check if the text 'About' is present after navigation, indicating that the About screen is rendered
        const aboutScreenText = getByText('About');
        expect(aboutScreenText).toBeDefined();
    });
});