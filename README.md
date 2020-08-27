# gamanfy hrr web-app.

# Project URL: 
https://app.gamanfy.com 

## Description

Web app aimed to provide companies and users a service for finding quality candidates for their job offers and also allowing non company clients to recommend candidates on their own, receiving a reward for each recommendation once it is hired.

## Pages for all users

- **homepage** - Interface that allows to create company and influencer accounts and to login if already registered.
- **sign up** - As a user I want to sign up on the webpage so that I can make recommendations or publish offers.
- **login** - Interface that allows users to login as a company or as an influencer.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **homeStart** - User will have the clues to interact with the app.
- **complete profile** - Interface that allows user to complete its account details.
- **offerdetails** - Interface that allows users to check job offers details.

## Pages for Influencer Users

- **profile** - Interface to check private client information.
- **edit profile picture** - Client can change its profile picture while clicking on the user logo next to log out and user name.
- **job offers** - Interface that provides the influencer with all offers from companies and allows it to recommend and filter them by role, city and sector.
- **recommendations** - Interface that shows the influencer its recommendations and its status.
- **my income** - Interface that shows the influencer its account status, how the punctuation system goes, current recommendations and total money earned.
- **gamanfy academy** - Interface that allows influencers to become a member of the Gamanfy Academy.
- **help** - Interface to ask help by email if necessary.
- **confirm account** - Interface that allows user to confirm its account after email link.


## Pages for Companies

- **publish an offer** - Interface that allows companies to publish offers.
- **recommend a professional** -Interface that allows companies to recommend professionals to Gamanfy Team.
- **profile** - Interface that allows companies to check its private data and also to modify tax data.
- **my job offers** - Interface that allows companies to check their job offers and filter them by role, city and sector.
- **my processes** - Interface that allows companies to check job offer's role, city, on Date, inscribed candidates, in process candidates and hired candidates.
- **candidates details** - Interface that allows companies to check candidates short info, ask for a complete report by email and to check if the candidate has been recommended by a professional or amateur headhunter.
- **candidate report** - Interface that allow companies that have asked for candidate report to download its CV, to ask for videoconference interview and to add the candidate to in Process status.
- **employer branding** - Interface that allows companies to create a microsite.


## Routes for influencer users:


| Method | Route Front | Route Back | Description| Completed routes 
|--------|-------|-------|------------|--------|
| POST | auth/user/signup | /auth/user/signup | Signup route. Sends signup info to server, email to user and creates user in DB. | yes |
| POST |/auth/confirmation/:userId/:userToken/:isCompany |/auth/confirmation/:userId/:userToken/:isCompany | Confirmation account route. It verifies the account and checks a JSON token. | yes |
| POST | /auth/resend | /auth/resend | Resend token route. | yes |
| POST | /auth/user/:userId/:isaCompany/complete-profile | /auth/user/:userId/:isaCompany/complete-profile | Complete profile Route. | yes |
| POST | auth/user/login | /auth/user/login | Login route. Sends login form info to the server. | yes |
| GET | /auth/user/:userId/dashboard | /auth/user/:userId/dashboard | User Dashboard Route. Checks for a token and displays user info. | yes |
| PUT | /auth/user/:userId/edit-profile | /auth/user/:userId/edit-profile| Edit Profile Route. Admin route to edit user profile. | yes |
| POST | /auth/user/:userId/change-profile-picture | /auth/user/:userId/change-profile-picture | Profile picture change route. | yes |
| POST | /auth/user/logout | /auth/user/logout | Logout route. | yes |
| GET | /auth/user/getData/:userId | /auth/user/getData/:userId | Get user Data Route. Route that brings all user info from db.| yes |
| GET | /recommend/:userId/dashboard | /recommend/:userId/dashboard | User recommendations dashboard. | yes |
| POST | /recommend/influencerUser/:idCompany/:idUser/:idOffer | /recommend/influencerUser/:idCompany/:idUser/:idOffer | Influencer user recommendation route. | yes |
| POST | /recommend/companyUser/:userId/:offerId/:company | /recommend/companyUser/:userId/:offerId/:company | Company user recommendation route. | yes |
| POST | /recommend/user/delete-recommendation/:userId/:recommendationId/:offerId | /recommend/user/delete-recommendation/:userId/:recommendationId/:offerId | Route that allows user to delete recommendations. Not implemented. | yes |
| POST | /recommend/user/reject-rec/:recommendationId/:offerId | /recommend/user/reject-rec/:recommendationId/:offerId | User rejecting recommendation route. Allows user to reject recommendations being made by other influencers. | yes |
| POST | /recommend/candidate-accept-recommendation/updateCandidateProcess/:offerId/:recommendationId | /recommend/candidate-accept-recommendation/updateCandidateProcess/:offerId/:recommendationId | Candidate route to check offer details and accept offer. | yes | 
| GET | /offers/dashboard | /offers/dashboard | Offers Dashboard for influencers. | yes |


## Routes for companies

| Method | Route Front | Route Back | Description| Completed routes 
|--------|-------|-------|------------|--------|
| POST | /auth-co/company/signup | /auth-co/company/signup | signup route. Sends signup info to server, email to user and creates user in DB. | yes |
| POST | /auth-co/confirmation/:companyId/:companyToken | /auth-co/confirmation/:companyId/:companyToken | Confirmation account route. It verifies the account and checks a JSON token. | yes |
| POST | /auth-co/resend | /auth-co/resend | Resend token route. | yes |
| POST | /auth-co/company/login | /auth-co/company/login | Login route. Sends login form info to the server. | yes |
| POST | /auth-co/company/:companyId/dashboard | /auth-co/company/:companyId/dashboard | User Dashboard Route. Checks for a token and displays user info. | yes |
| POST | /auth-co/company/:companyId/edit-profile | /auth-co/company/:companyId/edit-profile | Edit Profile Route. Allows company to change its tax details. | yes |
| POST | /auth-co/company/getData/:companyId | /auth-co/company/getData/:companyId | Brings specific company data from server. | yes |
| POST | /auth-co/company/logout | /auth-co/company/logout | Logout Route. | yes |
| GET | /offers/candidates/:offerId/:companyId | /offers/candidates/:offerId/:companyId | Candidates in offer Route. | yes |
| POST | /offers/candidates/reject-candidate/:offerId/:companyId/:recommendationId | /offers/candidates/reject-candidate/:offerId/:companyId/:recommendationId | Company rejection candidate route. | yes |
| POST | /offers/:companyId/post-job-offer | /offers/:companyId/post-job-offer | Company posting job offer route. | yes |
| PUT | /offers/:companyId/:offerId/edit-offer | /offers/:companyId/:offerId/edit-offer | Company edit job offer route. Not implemented. | yes |
| POST | offers/:companyId/:offerId/delete-offer | /offers/:companyId/:offerId/delete-offer | Company deleting job offer Route. | yes |
| POST | /offers/company/infoRequest/:offerId/:companyId/:recommendationId | /offers/company/infoRequest/:offerId/:companyId/:recommendationId | Company request for candidate info by email Route. | yes |
| POST | /offers/:recommendationId/candidate-info | /offers/:recommendationId/candidate-info | Route to display candidate report and donwload its pdf CV. | yes |
| POST | /recommend/:companyId | /recommend/:companyId | Route to send company recommendation to server. | yes |
| GET | /recommend/:offerId/inProcess | /recommend/:offerId/inProcess | Route to display only recommendations with inProcess status. | yes |
| POST | /recommend/admin-validate-candidate/updateCandidateProcess/:offerId/:recommendationId | /recommend/admin-validate-candidate/updateCandidateProcess/:offerId/:recommendationId | Admin route to validate candidate recommendation. | yes |
| POST | /recommend/candidate-interview/updateCandidateProcess/:offerId/:recommendationId | /recommend/candidate-interview/updateCandidateProcess/:offerId/:recommendationId | Admin Route to update candidate status to inProcess.
| POST | /recommend/updateCandidateProcess/candidate-hired/:offerId/:recommendationId |/updateCandidateProcess/candidate-hired/:offerId/:recommendationId | Admin Route to update candidate status to hired.


## Routes for all users

| Method | Route Front | Route Back | Description| Completed routes 
|--------|-------|-------|------------|--------|
| GET | /offers/offer-details/:offerId | /offers/offer-details/:offerId | Offer details. | yes |


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

