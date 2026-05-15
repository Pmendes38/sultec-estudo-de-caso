@echo off
chcp 65001 >nul
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo GIT DEPLOYMENT
echo ========================================
echo.

echo Adding changes...
git add -A

echo Creating commit...
git commit -m "Corrigir glow laranja CTA e atualizar informações do rodapé" ^
  -m "- Suavizar gradiente do glow para remover bordas quadradas visíveis" ^
  -m "- Aumentar raio do ellipse (70 > 85 e 75 > 90) para efeito mais natural" ^
  -m "- Adicionar stops intermediários transparentes (45 e 65) para esmaecimento gradual" ^
  -m "- Terminar com transparent 90 em vez de 78 para transição imperceptível" ^
  -m "- Atualizar telefone: (49) 99965-0736" ^
  -m "- Atualizar email: sultec.comercial1@gmail.com" ^
  -m "- Atualizar endereço: R. Tomé de Sousa, 113 - Bela Vista, Chapecó - SC, 89804-070" ^
  -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Pushing to repository...
git push

echo.
echo === COMMIT LOG ===
git log --oneline -3

echo.
echo ========================================
echo DEPLOYMENT COMPLETE!
echo ========================================
pause
