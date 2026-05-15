@echo off
chcp 65001 >nul
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo GIT PUSH - BOTOES CTA
echo ========================================
echo.

echo Adicionando mudancas...
git add -A

echo Criando commit...
git commit -m "Corrigir overflow dos botões CTA em resoluções intermediárias" ^
  -m "- Adicionar max-w-[380px] para garantir que os botões não excedam margem em nenhuma resolução" ^
  -m "- Reduzir padding de px-7 py-5 para px-6 py-4 para melhor proporção" ^
  -m "- Adicionar responsividade de font-size: text-[16px] sm:text-[17px] lg:text-[18px]" ^
  -m "- Usar whitespace-nowrap e flex-1 para evitar quebra de linha do texto" ^
  -m "- Adicionar flex-shrink-0 ao SVG e Image para evitar compressão dos ícones" ^
  -m "- Ajustar py do botão WhatsApp de py-[18px] para py-[16px] para consistência" ^
  -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Push para repositorio...
git push

echo.
echo === GIT LOG ===
git log --oneline -3

echo.
echo ========================================
echo DEPLOY COMPLETE!
echo ========================================
pause
