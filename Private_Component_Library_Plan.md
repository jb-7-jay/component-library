# Private Component Library: Secure Sharing & Usage Strategy

This document outlines a secure and scalable approach for sharing our private React component library—`@jb-7-jay/react-component`—across the organization, leveraging GitHub Enterprise features. The goal is to allow only three maintainers to develop and publish the package, while enabling 20–25 consumer developers to use it in their own projects.

---

## Objectives

- **Restrict code and publish permissions** to the component library to three maintainers.
- **Enable a group of consumer developers** to install and use the library in other projects (e.g., `societyFrontend`).
- Leverage existing GitHub Enterprise Organization permissions and GitHub Packages.
- Provide secure, documented onboarding for all users.

---

## Planned Structure

### 1. **Repository Settings**

- **Host `component-library` in the Organization.**
- **Maintain two teams:**
  - **Maintainers:** The 3 developers responsible for component development and package publishing.
  - **Consumers:** Developers who will use (install) the component in other internal projects.

### 2. **Permissions**

| Role        | GitHub Team | Repo Access | Can Install? | Can Publish? | Can Edit Code? |
| ----------- | ----------- | ----------- | ------------ | ------------ | -------------- |
| Maintainers | Maintainers | Write/Admin | Yes          | Yes          | Yes            |
| Developers  | Consumers   | Read        | Yes          | No           | No             |

- **Write/Admin**: Only for Maintainers (can push code, merge PRs, and publish new package versions)
- **Read**: For Consumers team (allows install of the private package, but no write/PR/push access)

### 3. **Technical Workflow**

**A. Repo and Org Setup**

- The repo is transferred or created under the GitHub Organization.
- Only Maintainers have Write/Admin access.
- "Consumers" team is set up with Read access.

**B. Publishing Process (Maintainers Only)**

- Only Maintainers publish (`npm publish` or `pnpm publish`) new versions.
- Code/branch protections are enforced (optional: CODEOWNERS file).

**C. Installing for Consumers**

1. **Token Creation:**  
   Consumers generate a personal GitHub token (`read:packages` scope).

2. **.npmrc Configuration:**  
   Each Consumer adds to their `~/.npmrc`:

   ```
   @jb-7-jay:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

3. **Install as Usual:**
   ```
   pnpm install @jb-7-jay/react-component
   # or
   npm install @jb-7-jay/react-component
   ```

**D. CI/CD Pipelines**

- Use an org/repo GitHub Actions token or store a `read:packages` token as a secret for installing during builds.

---

## Security Considerations

- Only authorized users get write/publish access.
- Consumers can see the code (with Read access), but cannot merge or push.
- All install activity is logged due to GitHub Enterprise auditing.
- No tokens are ever committed to repositories.

---

## Onboarding Summary for Developers

1. Get added to the "Consumers" team in the GitHub Organization.
2. Create a GitHub Personal Access Token with `read:packages`.
3. Add the above `.npmrc` configuration.
4. Install the package as needed.

---

## Advantages

- **Clear separation** between maintainers and consumers.
- **Leverages existing org management and SSO.**
- **Centralized and auditable access control.**
- **No external services required.**

---

## Next Steps

1. Move `component-library` to the organization (if not already there).
2. Set up “Maintainers” and “Consumers” teams.
3. Update permissions in the repo.
4. Distribute onboarding/documentation to teams.

---

_Prepared by: Jay Bhingradiya, [8 Dec, 2025]_
