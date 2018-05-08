port module External exposing (sendPlaySound)

port playSound : String -> Cmd msg

sendPlaySound : String -> Cmd msg
sendPlaySound filename = playSound filename
