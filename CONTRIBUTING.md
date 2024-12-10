# Contributing to Arctic-Kit

First off, thank you for considering contributing to **Arctic-Kit**! 🎉 Your efforts to improve the project are greatly appreciated. Whether you're fixing bugs, improving documentation, or suggesting new features, your contributions help make Arctic-Kit better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [Coding Style](#coding-style)
  - [Commit Messages](#commit-messages)
  - [Naming Conventions](#naming-conventions)
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Testing](#testing)
- [Documentation](#documentation)
- [License](#license)
- [Contact](#contact)

---

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for all contributors.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in Arctic-Kit, please help us fix it by following these steps:

1. **Check Existing Issues:**  
   Before creating a new issue, search [existing issues](https://github.com/arctic-design/arctic-kit/issues) to see if it has already been reported.

2. **Open a New Issue:**  
   If your bug hasn't been reported, [open a new issue](https://github.com/arctic-design/arctic-kit/issues/new) and include the following:
   - A clear and descriptive title.
   - A detailed description of the problem.
   - Steps to reproduce the issue.
   - Expected and actual behavior.
   - Any relevant logs or screenshots.

### Suggesting Enhancements

We welcome suggestions for new features or improvements. To propose an enhancement:

1. **Search for Existing Suggestions:**  
   Look through [existing issues](https://github.com/arctic-design/arctic-kit/issues) to ensure your idea hasn't been proposed already.

2. **Open a New Feature Request:**  
   If your idea is unique, [create a new issue](https://github.com/arctic-design/arctic-kit/issues/new) with the following:
   - A clear and descriptive title.
   - A detailed description of the proposed feature or improvement.
   - Any additional context or screenshots to illustrate your idea.

### Your First Code Contribution

If you're looking to make your first contribution:

1. **Look for Good First Issues:**  
   Check our [Good First Issues](https://github.com/arctic-design/arctic-kit/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) to find tasks that are well-suited for newcomers.

2. **Ask for Guidance:**  
   Don't hesitate to comment on the issue if you have any questions or need clarification.

### Pull Requests

Follow these steps to submit a Pull Request (PR):

1. **Fork the Repository:**  
   Click the "Fork" button at the top right of this page to create your own copy of the repository.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/arctic-design/arctic-kit.git
   cd arctic-kit
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes:**  
   Implement your feature or fix, ensuring adherence to our [Coding Style](#coding-style).

5. **Commit Your Changes:**  
   Follow our [Commit Messages](#commit-messages) guidelines.

6. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request:**  
   Navigate to your fork on GitHub and click "Compare & pull request". Provide a clear description of your changes and reference any related issues.

8. **Address Feedback:**  
   Collaborate with reviewers to make any necessary adjustments.

---

## Style Guides

### Coding Style

- **Language:**  
  Arctic-Kit is built with **TypeScript**. Ensure type safety and leverage TypeScript features for better code quality.

- **Linting:**  
  We use **ESLint** for linting. Make sure your code passes all linting checks by running:

  ```bash
  npx nx run-many --target=lint --all
  ```

- **Formatting:**  
  Code should be formatted consistently. We use **Prettier**. To format your code, run:
  ```bash
  npx nx format:write
  ```

### Commit Messages

Use clear and descriptive commit messages. Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

**Examples:**

- `feat: add new documentation generator script`
- `fix: resolve issue with component parsing`
- `docs: update CONTRIBUTING.md`

### Naming Conventions

- **Files and Directories:**  
  Use `kebab-case` for file and directory names.
- **Functions and Variables:**  
  Use `camelCase` for functions and variables.

- **Classes and Types:**  
  Use `PascalCase` for class and type names.

---

## Development Setup

### Prerequisites

- **Node.js:**  
  Ensure you have **Node.js v16** or higher installed. You can download it from [here](https://nodejs.org/).

- **Yarn or npm:**  
  Yarn is recommended for dependency management. Install Yarn [here](https://yarnpkg.com/).

- **Nx CLI:**  
  Install the Nx CLI globally:
  ```bash
  npm install -g nx
  ```

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arctic-design/arctic-kit.git
   cd arctic-kit
   ```

2. **Install Dependencies:**  
   Using Yarn:
   ```bash
   yarn install
   ```
   Or using npm:
   ```bash
   npm install
   ```

### Running the Project

- **Build All Projects:**

  ```bash
  npx nx run-many --target=build --all
  ```

- **Run Linting:**

  ```bash
  npx nx run-many --target=lint --all
  ```

- **Run Tests:**

  ```bash
  npx nx run-many --target=test --all
  ```

- **Generate Documentation:**
  ```bash
  npx nx run snow:generate-docs
  ```

---

## Testing

- **Run All Tests:**  
  Execute all tests across the workspace:

  ```bash
  npx nx run-many --target=test --all
  ```

- **Run Specific Project Tests:**

  ```bash
  npx nx test your-project-name
  ```

- **Run Linting and Formatting Checks:**
  ```bash
  npx nx run-many --target=lint --all
  npx nx format:check
  ```

Ensure all tests pass and code adheres to linting rules before submitting a PR.

---

## Documentation

- **Generating Documentation:**  
  Use the `docs-generator` library to generate documentation:

  ```bash
  npx nx run snow:generate-docs
  ```

- **Updating Documentation:**  
  Ensure that any changes to components or utilities are reflected in the documentation. Run the documentation generator to keep the docs up-to-date.

- **Contributing to Documentation:**  
  If you're updating or adding new documentation manually, follow the existing structure and formatting for consistency.

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

## Contact

If you have any questions, feel free to reach out:

- **GitHub Issues:**  
  Open an issue [here](https://github.com/arctic-design/arctic-kit/issues).

- **Email:**  
  Contact us at [support@arctic-kit.com](mailto:support@arctic-kit.com).

---

Thank you again for your interest in contributing to Arctic-Kit! We look forward to collaborating with you.
