import { allure } from 'allure-playwright';
import { testMetadata } from '@TestMetadata';

export function setupAllure(testId: keyof typeof testMetadata) {
    const details = testMetadata[testId];

    allure.label('owner', details.owner);
    allure.tms(details.tms, `https://veriflowqa.atlassian.net/browse/${details.tms}`);
    allure.description(details.description);
    allure.displayName(details.displayname);
    allure.parameter(details.parameter);
    allure.severity(details.severity.toUpperCase());
    details.tags.forEach(tag => allure.tag(tag));

    if (details.suite) allure.suite(details.suite);
    if (details.feature) allure.feature(details.feature);
    if (details.story) allure.story(details.story);

    allure.attachment('Test Metadata', JSON.stringify(details, null, 2), 'application/json');
}
