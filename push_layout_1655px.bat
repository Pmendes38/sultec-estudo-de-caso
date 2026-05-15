@echo off
chcp 65001 >nul
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo GIT PUSH - LAYOUT CTA 1655PX
echo ========================================
echo.

echo Adicionando mudancas...
git add -A

echo Criando commit...
git commit -m "Reorganizar layout CTA para 1655px+ (botões abaixo, texto centralizado)" ^
  -m "=== Tailwind Config ===" ^
  -m "- Adicionar breakpoint customizado 3xl: 1655px" ^
  -m "" ^
  -m "=== CTA Layout 1655px+ ===" ^
  -m "- Mover flex de lg:flex-row para 3xl:flex-col" ^
  -m "- Centralizar items no 3xl: items-center para ambos" ^
  -m "- Remover spacer no 3xl (hidden 3xl:hidden)" ^
  -m "- Centralizar texto no 3xl: text-center" ^
  -m "- Centralizar botões: mx-auto, max-w full para full-width" ^
  -m "- Resultado: Botões vão para ABAIXO do texto em resoluções 1655px+" ^
  -m "- Texto fica centralizado junto ao S asset" ^
  -m "" ^
  -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Push para repositorio...
git push

echo.
echo === GIT LOG ===
git log --oneline -3

echo.
echo ========================================
echo LAYOUT 1655PX+ IMPLEMENTADO!
echo ========================================
pause
