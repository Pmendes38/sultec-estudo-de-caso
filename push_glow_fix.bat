@echo off
chcp 65001 >nul
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo GIT PUSH - CORRIGIR GLOW CTA
echo ========================================
echo.

echo Adicionando mudancas...
git add -A

echo Criando commit...
git commit -m "Remover dot grid do mobile - corrigir glow persistente" ^
  -m "- Adicionar 'hidden lg:block' no top-right dot grid" ^
  -m "- O dot grid estava visível em TODAS as resoluções (falta de hidden)" ^
  -m "- Isso criava as linhas laranjas/vermelhas visíveis no mobile/tablet" ^
  -m "- Agora o dot grid só aparece em desktop (lg+)" ^
  -m "- Glow, padrão de linhas e dot grid agora 100%% hidden no mobile" ^
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
echo GLOW FIXADO!
echo ========================================
pause
