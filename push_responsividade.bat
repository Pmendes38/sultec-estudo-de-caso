@echo off
chcp 65001 >nul
cd /d "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"

echo.
echo ========================================
echo GIT PUSH - RESPONSIVIDADE CTA E HERO
echo ========================================
echo.

echo Adicionando mudancas...
git add -A

echo Criando commit...
git commit -m "Corrigir responsividade CTA e quebra de texto Hero" ^
  -m "=== CTA Mobile ===" ^
  -m "- Remover glow no mobile/tablet (hidden lg:block)" ^
  -m "- Remover padrão de linhas no mobile (hidden lg:block)" ^
  -m "- Centralizar texto e botões no mobile (text-center lg:text-left, mx-auto lg:mx-0)" ^
  -m "- Aumentar font-size no mobile: clamp(1.75rem, 4vw, 44px)" ^
  -m "- Reduzir padding botões no mobile: px-5 md:px-6 py-3 md:py-4" ^
  -m "- Reduzir gap botões no mobile: gap-3 md:gap-4" ^
  -m "" ^
  -m "=== Asset S ===" ^
  -m "- Mostrar S em tablet (md:block em vez de hidden lg:block)" ^
  -m "- Reduzir tamanho em tablet: md:w-[280px] md:h-[320px]" ^
  -m "- Posicionar S mais à esquerda em tablets: md:left-[5%% md:-translate-x-1/2" ^
  -m "- Manter posicionamento correto em lg+: lg:left-[19.25%%]" ^
  -m "" ^
  -m "=== Hero ===" ^
  -m "- Remover whitespace-nowrap para não quebrar em mobile" ^
  -m "- Corrigir: 'E' não fica mais isolado em linha separada" ^
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
echo DEPLOY COMPLETE!
echo ========================================
pause
