Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

strPath = "c:\Users\pedro\OneDrive\Desktop\SITE SULTEC.worktrees\agents-design-system-correcoes-site"
objShell.CurrentDirectory = strPath

' Add all changes
objShell.Run "cmd /c git add -A", 1, true

' Create commit
Dim commitMsg
commitMsg = "Corrigir glow laranja CTA e atualizar informações do rodapé" & vbCrLf & vbCrLf & _
"- Suavizar gradiente do glow para remover bordas quadradas visíveis" & vbCrLf & _
"- Aumentar raio do ellipse (70 > 85 e 75 > 90) para efeito mais natural" & vbCrLf & _
"- Adicionar stops intermediários transparentes (45 e 65) para esmaecimento gradual" & vbCrLf & _
"- Terminar com transparent 90 em vez de 78 para transição imperceptível" & vbCrLf & _
"- Atualizar telefone: (49) 99965-0736" & vbCrLf & _
"- Atualizar email: sultec.comercial1@gmail.com" & vbCrLf & _
"- Atualizar endereço: R. Tomé de Sousa, 113 - Bela Vista, Chapecó - SC, 89804-070" & vbCrLf & vbCrLf & _
"Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

objShell.Run "cmd /c git commit -m """ & Replace(commitMsg, """", "\""") & """", 1, true

' Push to repository
objShell.Run "cmd /c git push", 1, true

' Show log
objShell.Run "cmd /c git log --oneline -3 & pause", 1, false
