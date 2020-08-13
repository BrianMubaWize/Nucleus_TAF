import loginPage from './../Pages/LoginPage';

fixture `Login Tests`
    .page `${process.env.URL}`;
    
    test ('Test successfull login', async t => {
        await loginPage.login(`${process.env.USER_NAME}`,`${process.env.PASSWORD}`);
    
        await t.expect(loginPage.inputName.exists).notOk();
    });