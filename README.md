## About the Site 🚀

Blockchain-based eCommerce warranty system using NFTs
The objective is to replace the physical warranty and have block chain based warranty using NFT which will ensure
authenticity and security. <br>
● Converting ownership authenticity and product warranty cards into decaying NFTs.📉<br>
● For instance, allow brands and retailers to introduce an NFT for each of their products, which allows customers to receive the physical product along with a digital version of it.🚀<br>
● Customers can then use the digital NFT to verify the authenticity of their product, prove their ownership of their product, and transfer ownership of them upon resale.🎯<br>
● The brand/retailer should also be able to tie the digital NFT to its warranty program, allowing owners to trackrepairs and replacements to the original item.🤩<br>
● Decay the NFT once the warranty is over.🥸<br>
● WE used the Polygon blockchain to deploy our solution and demo the final product as a web prototype🔗<br>
## How to execute? 💻

### Clone project:
`git clone https://bitbucket.org/nft-dapps/nft-warranty-system.git`

### Go to root directory: 
`cd nft-warranty-system`

### First install the packages using follow cmd:
`npm run install-all`

### Now start the project using concurrently:
`npm start`


## Tech Stack 💻

### WEB 3.0 :
- Hardhat 
- Moralis 
- Solidity 
- Ethereum 

### Frontend :

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

### Backend :

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


### Project Goals 
Skill Test
The goal of this test is to confirm you can integrate the smart contracts into backend.
You have to add a new API into "server/index.js" named [Your Name]ApiTest.
And you have to fetch some info on any pre-deployed or public smart contracts through your API.
No need for any front-end to show the result.
Just the result on the console is enough to show your work.
Once you complete the test, you can send a short video to show your work.

### Steps to complete the test

1. Add a new API into "server/index.js" named [Your Name]ApiTest.
2. Fetch some info on any pre-deployed or public smart contracts through your API.
3. No need for any front-end to show the result.
4. Just the result on the console is enough to show your work.


⌘K to generate a command
help me with the skill test

I'll help you create an API endpoint to fetch information from a smart contract. Here's how we can implement the skill test requirement:
First, we'll need to add the ethers.js library to interact with smart contracts. Add it to the server directory:
Bash
ethers
Here's an example implementation to add to server/index.js:

help me with the skill test

I'll help you create an API endpoint to fetch information from a smart contract. Here's how we can implement the skill test requirement:
First, we'll need to add the ethers.js library to interact with smart contracts. Add it to the server directory:
Bash
ethers
Here's an example implementation to add to server/index.js:
index.js
.
This implementation:
1. Creates a new GET endpoint /api/YourNameApiTest
Connects to the Polygon Mumbai testnet
Queries a USDC token contract for basic information (name, symbol, total supply)
Logs the results to console and returns them as JSON
To test it:
Start your server
Make a GET request to http://localhost:YOUR_PORT/api/YourNameApiTest
Check your server console for the logged data
You can modify this example to:
Use a different network (Ethereum mainnet, other testnets)
Query different smart contracts
Call different contract methods
Add more complex interactions
Remember to:
Replace "YourName" in the endpoint with your actual name
Record a short video showing:
The code implementation
Making the API request
The console output showing the contract data
This demonstrates your ability to integrate smart contracts with a backend API, which is the main goal of the skill test.
### Project Structure
```
repo_ecommerce/
├── .git/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── Assets/
│   │   │   ├── Home/
│   │   │   │   ├── 1.png
│   │   │   │   ├── 2.png
│   │   │   │   ├── 3.png
│   │   │   │   ├── 4.png
│   │   │   │   ├── 5.png
│   │   │   │   ├── bag1.png
│   │   │   │   ├── bag2.png
│   │   │   │   ├── bagpacks.png
│   │   │   │   ├── hoddie2.png
│   │   │   │   ├── hoodie1.png
│   │   │   │   ├── hoodie2.png
│   │   │   │   ├── hoodies.png
│   │   │   │   ├── index.js
│   │   │   │   ├── shoe1.png
│   │   │   │   ├── shoe2.png
│   │   │   │   ├── sneakers.png
│   │   │   │   ├── tshirt1.png
│   │   │   │   ├── tshirt2.png
│   │   │   │   ├── tshirts.png
│   │   │   │   └── waves.svg
│   │   │   ├── cart.svg
│   │   │   ├── changePass.svg
│   │   │   ├── create.svg
│   │   │   ├── edit.svg
│   │   │   ├── error.png
│   │   │   ├── footer_img.png
│   │   │   ├── logout.svg
│   │   │   ├── nishant.png
│   │   │   ├── not_found.png
│   │   │   ├── profile.svg
│   │   │   ├── purchased.svg
│   │   │   ├── saurabh.png
│   │   │   ├── spider.png
│   │   │   ├── trial1.png
│   │   │   ├── trial2.png
│   │   │   ├── trial3.png
│   │   │   ├── trial4.png
│   │   │   └── trial5.png
│   │   ├── Components/
│   │   │   ├── Cart/
│   │   │   │   ├── Cart.jsx
│   │   │   │   └── Cart.module.css
│   │   │   ├── CategoryPage/
│   │   │   │   ├── CategoryPage.jsx
│   │   │   │   └── CategoryPage.module.css
│   │   │   ├── Explore/
│   │   │   │   ├── Explore.jsx
│   │   │   │   └── Explore.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   └── Home.module.css
│   │   │   ├── Login/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Login.module.css
│   │   │   │   ├── LoginHero.jsx
│   │   │   │   └── LoginHero.module.css
│   │   │   ├── Navbar/
│   │   │   │   ├── Dropdown.jsx
│   │   │   │   ├── Dropdown.module.css
│   │   │   │   ├── MenuItems.js
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.module.css
│   │   │   ├── NotFound/
│   │   │   │   ├── NotFound.jsx
│   │   │   │   └── NotFound.module.css
│   │   │   ├── Product/
│   │   │   │   ├── Product.jsx
│   │   │   │   └── Product.module.css
│   │   │   ├── Retailer/
│   │   │   │   ├── ChangePass/
│   │   │   │   │   ├── ChangePass.jsx
│   │   │   │   │   └── ChangePass.module.css
│   │   │   │   ├── CreateProduct/
│   │   │   │   │   ├── CreateProduct.jsx
│   │   │   │   │   └── CreateProduct.module.css
│   │   │   │   ├── EditProfile/
│   │   │   │   │   ├── EditProfile.jsx
│   │   │   │   │   └── EditProfile.module.css
│   │   │   │   ├── LogoutModal/
│   │   │   │   │   ├── LogoutModal.jsx
│   │   │   │   │   └── LogoutModal.module.css
│   │   │   │   ├── MyItems/
│   │   │   │   │   ├── MyItems.jsx
│   │   │   │   │   └── MyItems.module.css
│   │   │   │   ├── Profile/
│   │   │   │   │   ├── Profile.jsx
│   │   │   │   │   └── Profile.module.css
│   │   │   │   ├── index.js
│   │   │   │   ├── Retailer.jsx
│   │   │   │   └── Retailer.module.css
│   │   │   ├── Signup/
│   │   │   │   ├── Signup.jsx
│   │   │   │   ├── Signup.module.css
│   │   │   │   ├── SignupHero.jsx
│   │   │   │   └── SignupHero.module.css
│   │   │   ├── UI/
│   │   │   │   ├── Card/
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   └── Card.module.css
│   │   │   │   ├── CartIcon/
│   │   │   │   │   ├── CartIcon.jsx
│   │   │   │   │   └── CartIcon.module.css
│   │   │   │   ├── CustomButton/
│   │   │   │   │   ├── CustomButton.jsx
│   │   │   │   │   └── CustomButton.module.css
│   │   │   │   ├── InputField/
│   │   │   │   │   ├── InputField.jsx
│   │   │   │   │   └── InputField.module.css
│   │   │   │   ├── LandingHero/
│   │   │   │   │   ├── LandingHero.jsx
│   │   │   │   │   └── LandingHero.module.css
│   │   │   │   ├── Loading/
│   │   │   │   │   ├── Loading.jsx
│   │   │   │   │   └── Loading.module.css
│   │   │   │   ├── Logo/
│   │   │   │   │   ├── Logo.jsx
│   │   │   │   │   └── Logo.module.css
│   │   │   │   ├── Modal/
│   │   │   │   │   ├── Modal.jsx
│   │   │   │   │   └── Modal.module.css
│   │   │   │   ├── ProductCard/
│   │   │   │   │   ├── ProductCard.jsx
│   │   │   │   │   └── ProductCard.module.css
│   │   │   │   ├── SingleProductCard/
│   │   │   │   │   ├── SingleProductCard.jsx
│   │   │   │   │   └── SingleProductCard.module.css
│   │   │   │   ├── SplineModel/
│   │   │   │   │   ├── SplineModel.jsx
│   │   │   │   │   └── SplineModel.module.css
│   │   │   │   └── index.js
│   │   │   ├── User/
│   │   │   │   ├── ChangePass/
│   │   │   │   │   ├── ChangePass.jsx
│   │   │   │   │   └── ChangePass.module.css
│   │   │   │   ├── EditProfile/
│   │   │   │   │   ├── EditProfile.jsx
│   │   │   │   │   └── EditProfile.module.css
│   │   │   │   ├── LogoutModal/
│   │   │   │   │   ├── LogoutModal.jsx
│   │   │   │   │   └── LogoutModal.module.css
│   │   │   │   ├── Profile/
│   │   │   │   │   ├── Profile.jsx
│   │   │   │   │   └── Profile.module.css
│   │   │   │   ├── PurchasedItems/
│   │   │   │   │   ├── PurchasedItems.jsx
│   │   │   │   │   └── PurchasedItems.module.css
│   │   │   │   ├── index.js
│   │   │   │   ├── User.jsx
│   │   │   │   └── User.module.css
│   │   │   ├── VerifyNft/
│   │   │   │   ├── VerifyHero.jsx
│   │   │   │   ├── VerifyHero.module.css
│   │   │   │   ├── VerifyNft.jsx
│   │   │   │   └── VerifyNft.module.css
│   │   │   └── index.js
│   │   ├── Constants/
│   │   │   ├── abi.json
│   │   │   └── social.contact.js
│   │   ├── Contexts/
│   │   │   ├── ProductContext/
│   │   │   │   ├── productContext.js
│   │   │   │   ├── productReducer.js
│   │   │   │   └── ProductState.js
│   │   │   ├── SellerAuthContext/
│   │   │   │   ├── sellerAuthContext.js
│   │   │   │   ├── sellerAuthReducer.js
│   │   │   │   └── SellerState.js
│   │   │   ├── UserAuthContext/
│   │   │   │   ├── userAuthContext.js
│   │   │   │   ├── userAuthReducer.js
│   │   │   │   └── UserState.js
│   │   │   ├── index.js
│   │   │   └── types.js
│   │   ├── Fonts/
│   │   │   ├── Starcraft-Italic.otf
│   │   │   ├── Starcraft-Normal.ttf
│   │   │   └── Starcraft.otf
│   │   ├── PrivateRoutes/
│   │   │   ├── index.js
│   │   │   ├── SellerPrivateRoute.js
│   │   │   └── UserPrivateRoute.js
│   │   ├── utils/
│   │   │   └── setAuthToken.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── readme_assets/
│   ├── create_account.png
│   ├── customer_profile.png
│   ├── ethereum.png
│   ├── featured_products.png
│   ├── flipkart_grid.png
│   ├── hardhat.png
│   ├── log_in.png
│   ├── logo.png
│   ├── mockup_main.png
│   ├── moralis.svg
│   ├── popup.png
│   ├── product_page.png
│   ├── retailer_profile.png
│   ├── solidity.png
│   └── verify_warranty.png
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── AuthControllers/
│   │   │   ├── sellerAuth.js
│   │   │   └── userAuth.js
│   │   ├── product.js
│   │   ├── seller.js
│   │   └── user.js
│   ├── helpers/
│   │   └── auth.js
│   ├── middleware/
│   │   ├── errorMiddleware.js
│   │   ├── sellerAuth.js
│   │   └── userAuth.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Seller.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes/
│   │   │   ├── sellerAuth.js
│   │   │   └── userAuth.js
│   │   ├── product.js
│   │   ├── seller.js
│   │   └── user.js
│   ├── utils/
│   │   └── helpers.js
│   ├── .env
│   ├── index.js
│   └── package.json
├── .all-contributorsrc
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```
