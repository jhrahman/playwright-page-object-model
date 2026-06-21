# Playwright Page Object Model - Test Automation Framework

A comprehensive test automation framework built with **Playwright** and **TypeScript**, demonstrating best practices in automated testing using the **Page Object Model (POM)** design pattern. This project tests an e-commerce application (Sauce Labs Demo) with end-to-end test scenarios.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Running Tests](#running-tests)
- [Page Object Model Architecture](#page-object-model-architecture)
- [Test Scenarios](#test-scenarios)
- [Configuration Details](#configuration-details)
- [Best Practices Implemented](#best-practices-implemented)

---

## 🎯 Project Overview

This project is a **test automation framework** that validates the functionality of an e-commerce web application using:
- **Playwright** - A modern, fast, and reliable browser automation library
- **TypeScript** - Provides type safety and better code maintainability
- **Page Object Model** - A design pattern that improves test code organization and maintainability

### Target Application
- **Sauce Labs Demo App** (https://www.saucedemo.com) - A practice e-commerce site for testing

### Key Features
- ✅ Authentication session management using storage state
- ✅ End-to-end test scenarios (login, browsing, cart, checkout)
- ✅ Modular and reusable page objects
- ✅ HTML test reports with screenshots and videos
- ✅ CI/CD ready configuration
- ✅ Environment-based configuration management

---

## 📁 Project Structure

```
playwright-page-object-model/
├── pages/                          # Page Object Model files
│   ├── LoginPage.ts               # Login page interactions & locators
│   ├── HomePage.ts                # Home/Products page interactions & locators
│   └── CartPage.ts                # Cart & checkout page interactions & locators
├── tests/                          # Test specification files
│   ├── auth.setup.ts              # Authentication setup (runs before tests)
│   ├── login.spec.ts              # Login functionality tests
│   ├── home.spec.ts               # Home page validation tests
│   ├── cart.spec.ts               # Cart & checkout flow tests
├── playwright/                     # Playwright-generated artifacts
│   └── .auth/user.json            # Stored authentication session
├── playwright-report/              # HTML test reports
├── test-results/                   # Test execution results
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md                        # This file
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | ^1.61.0 | Browser automation & testing framework |
| **TypeScript** | ES2020 | Type-safe scripting language |
| **Node.js** | Latest | Runtime environment |
| **dotenv** | ^17.4.2 | Environment variable management |

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Step-by-Step Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd playwright-page-object-model
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install:
   - `@playwright/test` - Playwright testing framework
   - `@types/node` - TypeScript definitions for Node.js
   - `dotenv` - Environment variable loader

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

---

## 🔐 Environment Configuration

### Create `.env` File

Create a `.env` file in the project root with the following variables:

```env
APP_USERNAME=<your_test_username>
APP_PASSWORD=<your_test_password>
```

**Note:** 
- The `.env` file is loaded automatically via the `dotenv` package in `playwright.config.ts`
- Store your test credentials securely in the `.env` file
- Refer to the Sauce Labs demo application for valid test account credentials
- Never commit `.env` file to version control

**Note:** The `.env` file is loaded automatically via the `dotenv` package in `playwright.config.ts`

---

## 🚀 Running Tests

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/login.spec.ts
```

### Run Tests in Headed Mode (see browser)
```bash
npx playwright test --headed
```

### Run Tests with Debugging
```bash
npx playwright test --debug
```

### Run Tests in UI Mode (Interactive mode)
```bash
npx playwright test --ui
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
```

### View Test Report
After tests complete, view the HTML report:
```bash
npx playwright show-report
```

---

## 🏗 Page Object Model Architecture

The **Page Object Model (POM)** is a design pattern that:
- Encapsulates page elements and interactions in separate classes
- Improves test maintainability and reduces code duplication
- Makes tests more readable and organized

### Page Objects Overview

#### **LoginPage** (`pages/LoginPage.ts`)
Handles login functionality and page interactions

**Key Elements:**
- `usernameInput` - Username input field
- `passwordInput` - Password input field
- `loginButton` - Login button
- `loginTitle` - Page title validation

**Key Methods:**
- `openApplication()` - Navigate to the application
- `loginMethod(username, password)` - Perform login action

---

#### **HomePage** (`pages/HomePage.ts`)
Handles home/products page interactions

**Key Elements:**
- `allItems` - All product inventory items
- `pageTitle` - Page title ("Products")
- `pageFooters` - Social media footer links
- `productSort` - Product sorting dropdown
- `shoppingCart` - Shopping cart link
- `openMenu` - Hamburger menu button

---

#### **CartPage** (`pages/CartPage.ts`)
Handles shopping cart and checkout flow

**Key Elements:**
- `addToCartButton` - Add item to cart button
- `removeButton` - Remove item from cart
- `cartButton` - Shopping cart link
- `cartList` - Cart items container
- `checkout` - Checkout button
- `firstname`, `lastname`, `postalcode` - Checkout information fields
- `finish` - Complete purchase button
- `thanku` - Order confirmation message

**Key Methods:**
- `addItemtoCart()` - Add product to cart
- `openCart()` - Navigate to cart page
- `checkoutButton()` - Click checkout button
- `enterInfo()` - Fill checkout information
- `paymentFinish()` - Complete purchase

---

## ✅ Test Scenarios

### 1. Authentication Setup (`tests/auth.setup.ts`)
- **Purpose:** Authenticates user and saves session state for reuse in other tests
- **Flow:**
  1. Open the application
  2. Login with credentials
  3. Save browser context storage state to `playwright/.auth/user.json`
- **Status:** Runs first before all other tests (dependency: "setup")

### 2. Login Test (`tests/login.spec.ts`)
- **Purpose:** Validate user login functionality
- **Validations:**
  - Login page displays "Swag Labs" title
  - After successful login, user is redirected to inventory page
  - Login form accepts credentials correctly

### 3. Home Page Validation (`tests/home.spec.ts`)
- **Purpose:** Validate home/products page elements and layout
- **Validations:**
  - Page title is "Products"
  - Social media footers are visible
  - Footer copyright is visible
  - Menu button is visible
  - Product sorting dropdown is visible
  - Shopping cart link is visible

### 4. Cart & Checkout Flow (`tests/cart.spec.ts`)
- **Purpose:** Validate complete shopping cart and checkout process
- **Flow:**
  1. Navigate to inventory page
  2. Add product to cart
  3. Verify "Remove" button appears
  4. Open shopping cart
  5. Verify cart contents and checkout options
  6. Complete checkout information entry
  7. Review order overview
  8. Verify payment information
  9. Complete purchase
  10. Verify "Thank you for your order!" confirmation message

---

## ⚙️ Configuration Details

### Playwright Configuration (`playwright.config.ts`)

| Setting | Value | Description |
|---------|-------|-------------|
| **testDir** | `./tests` | Directory containing test files |
| **fullyParallel** | `false` | Run tests sequentially (not in parallel) |
| **baseURL** | `https://www.saucedemo.com` | Base URL for all tests |
| **reporter** | `html` | Generate HTML report after test run |
| **trace** | `on-first-retry` | Record trace on first retry |
| **screenshot** | `only-on-failure` | Take screenshots only when tests fail |
| **video** | `retain-on-failure` | Record videos only for failed tests |
| **slowMo** | `1000ms` | Slow down actions for visibility |

### Setup Project
- **Name:** `setup`
- **Test Match:** `auth.setup.ts`
- **Purpose:** Authenticates user and creates session state

### Chromium Project
- **Name:** `chromium`
- **Dependencies:** `setup` (runs after setup completes)
- **Browser:** Chrome/Chromium desktop browser
- **Storage State:** Uses authenticated session from setup

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",           // Modern JavaScript features
    "module": "ES2020",            // ES modules
    "moduleResolution": "bundler", // Module resolution strategy
    "types": ["node", "@playwright/test"],
    "strict": true                 // Strict type checking enabled
  }
}
```

---

## 💡 Best Practices Implemented

### 1. **Page Object Model Pattern**
   - Encapsulates all page elements and interactions
   - Reduces code duplication in tests
   - Easier maintenance when UI changes

### 2. **Session-Based Authentication**
   - Setup project runs once and saves authentication state
   - Other tests reuse saved session, reducing login operations
   - Improves test execution speed

### 3. **Environment Variables**
   - Credentials stored in `.env` file (not hardcoded)
   - Secure and flexible configuration
   - Easy to switch between environments

### 4. **TypeScript Usage**
   - Type safety throughout the codebase
   - IntelliSense support in IDEs
   - Catches errors during development

### 5. **Data-Test Attributes**
   - Uses `data-test` attributes for reliable element selection
   - More maintainable than CSS classes or IDs
   - Resistant to styling changes

### 6. **Comprehensive Test Reporting**
   - HTML reports with test results
   - Screenshots on test failures
   - Video recordings for failed tests
   - Trace files for debugging

### 7. **CI/CD Ready**
   - Configuration supports GitHub Actions and other CI systems
   - Retry logic for flaky tests
   - Single worker for CI to avoid conflicts

---

## 📊 Test Execution Flow

```
┌─────────────────────────────────────┐
│   1. Setup Project (auth.setup.ts)  │
│   - Login & save session            │
│   - Store auth state                │
└──────────────┬──────────────────────┘
               │ (dependency met)
               ▼
┌─────────────────────────────────────┐
│  2. Chromium Project (tests run)    │
│   - Restore session from setup      │
│   - Run all test files:             │
│     • login.spec.ts                 │
│     • home.spec.ts                  │
│     • cart.spec.ts                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  3. Generate HTML Report            │
│   - Test results                    │
│   - Screenshots & videos            │
│   - Pass/Fail summary               │
└─────────────────────────────────────┘
```

---

## 🔍 Troubleshooting

### Issue: Tests Fail with "Page Not Found"
- **Solution:** Ensure `baseURL` is correct in `playwright.config.ts`
- **Check:** Network connectivity to Sauce Labs demo site

### Issue: Timeout Errors
- **Solution:** Increase timeout in `playwright.config.ts`
- **Alternative:** Use `--debug` flag to investigate element loading

### Issue: Environment Variables Not Loaded
- **Solution:** Ensure `.env` file exists in project root
- **Verify:** `APP_USERNAME` and `APP_PASSWORD` are set

### Issue: Authentication State Not Persisting
- **Solution:** Verify `playwright/.auth/` directory exists
- **Check:** `auth.setup.ts` runs successfully before other tests

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Page Object Model Guide](https://playwright.dev/docs/pom)
- [Sauce Labs Demo App](https://www.saucedemo.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 📝 License

ISC

---

**Last Updated:** 2024
**Version:** 1.0.0
