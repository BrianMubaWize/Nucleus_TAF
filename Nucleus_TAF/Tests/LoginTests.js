import { Selector, t } from 'testcafe';

fixture `Login Tests`
    .page `${'https://azusgb01--uat--cms.visualforce.com/apex/Main?name=homepage&sname=intranet#/'}`;
    
    const credentialSelect = Selector('#idpbridge');
    const credentialsOption = credentialSelect.find('option');

    test ('Test failed login', async t => {
        await t .click(credentialSelect)
                .click(credentialsOption.withText('AstraZeneca'))
                .click(Selector('.button'))
                .typeText(Selector('#username'),'kkbf413')
                .typeText(Selector('#password'),'Angnum22exx')
                .click(Selector('.button'));
    });