/**
 * (C) VeriFlow 2025 - Dynamic Environment Configuration for Allure
 *
 * This module manages dynamic environment properties updates for Allure reports.
 */

import * as fs from 'fs';
import * as path from 'path';

const propertiesFilePath = path.resolve(__dirname, '../../allure/config/environment.properties');

const defaultEnvConfig = {
    environment: 'UAT',
    release: 'LATEST',
    platform: 'LOCAL',
    language: 'ENGLISH',
    browser: 'Chrome',
    suite: 'ALL',
};

/**
 * Load properties from environment.properties
 */
export function getCurrentEnvConfig() {
    if (!fs.existsSync(propertiesFilePath)) {
        console.warn(`⚠️ environment.properties file not found. Using default values.`);
        return { ...defaultEnvConfig };
    }

    const content = fs.readFileSync(propertiesFilePath, 'utf-8');
    const properties: Record<string, string> = {};

    content.split('\n').forEach(line => {
        if (!line.includes('=')) return;
        const [key, ...value] = line.split('=');
        properties[key.trim().toLowerCase()] = value.join('=').trim();
    });

    return {
        environment: properties['environment'] || defaultEnvConfig.environment,
        release: properties['release'] || defaultEnvConfig.release,
        platform: properties['platform'] && properties['platform'] !== 'undefined' ? properties['platform'] : defaultEnvConfig.platform,
        language: properties['language'] || defaultEnvConfig.language,
        browser: properties['browser'] || defaultEnvConfig.browser,
        suite: properties['suite'] || defaultEnvConfig.suite,
    };
}

/**
 * Update environment.properties file.
 */
export function updateEnvConfig(updates: Partial<typeof defaultEnvConfig>) {
    const config = { ...getCurrentEnvConfig(), ...updates };

    const content = Object.entries(config)
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}=${value}`)
        .join('\n');

    fs.writeFileSync(propertiesFilePath, content, 'utf-8');
    console.log(`✅ Updated environment.properties:\n${content}`);
}

/**
 * Set the dynamic suite name.
 */
export function setDynamicSuite(suiteName: string) {
    updateEnvConfig({ suite: suiteName });
}

/**
 * Detect if running all tests.
 */
export function detectIfRunningAllTests(): boolean {
    return !process.argv.some(arg => arg.includes('.spec.'));
}
