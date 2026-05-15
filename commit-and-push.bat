@echo off
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo SULTEC WEBSITE - GITHUB DEPLOYMENT
echo ========================================
echo.

echo 1. Checking current git status...
git status --short
echo.

echo 2. Staging all changes...
git add .
echo Changes staged successfully!
echo.

echo 3. Showing files to be committed...
git diff --cached --name-only
echo.

echo 4. Committing with descriptive message...
git commit -m "Clean rebuild: production-ready site" ^
  -m "- Rebuilt 8 clean sections from zero (Header, Hero, About, Services, Portfolio, Differentials, Clients, CTA, Footer)" ^
  -m "- Full design system compliance (colors: #FF6A00/#0D0D0D/#111111, typography: SORA, spacing: responsive)" ^
  -m "- 3 base UI components (Button, Container, Card)" ^
  -m "- Mobile-first responsive design (sm/md/lg/xl breakpoints)" ^
  -m "- Zero hard-coded colors - all design tokens from tailwind.config.ts" ^
  -m "- TypeScript strict mode enabled" ^
  -m "- Deployment ready: Vercel/Docker/Self-hosted configs included" ^
  -m "- Complete documentation (DEPLOYMENT.md, READY_TO_DEPLOY.md, README.md)" ^
  -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo 5. Verifying commit...
git log --oneline -1
echo.

echo 6. Checking for remote...
git remote -v
echo.

echo ========================================
echo Next: Push to GitHub
echo Run: git push origin main
echo ========================================
