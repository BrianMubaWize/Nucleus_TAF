import { Selector, t } from 'testcafe';

const loginButtons = Selector('.xC29iLDJOfZeDm_x5o7DH');

class LoginPage
{
    constructor()
    {
        this.loginButton      = loginButtons.child();
		this.inputPassword    = Selector('#password');
		this.loginPopUpButton = this.inputPassword.nextSibling();
		this.inputName        = Selector('#email');
		this.popUpFrame       = Selector('._3ga5XTxZEFAiG-Q7KQfQnT');
		this.loggedInMessage  = Selector('#error_text');
		this.mailErrorMessage = Selector('.error_msg>span');
    }

    async login ()
    {
        this.clickLoginButton();
        await t.switchToIframe(this.popUpFrame);
        this.setUserName('brianmuba@gmail.com');
        this.setPassword('brian1234');
        this.clickLoginPopUpButton();
        await t.switchToMainWindow();

    }

    async clickLoginButton()
    {
        await t.click(this.loginButton);
    }

    async setUserName(userName)
	{
		await t.typeText(this.inputName, userName);
    }
    
    async setPassword(userPassword)
	{
		await t.typeText(this.inputPassword, userPassword);
    }
    
    async clickLoginPopUpButton()
	{
		await t.click(this.loginPopUpButton);
	}
}

export default new LoginPage;