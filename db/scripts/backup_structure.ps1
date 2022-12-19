$MYSQL_DIR = "C:\Program Files\MySQL\MySQL Server 8.0\bin"
$BACKUP_FOLDER = "C:\users\awotherspoon\code\backups\gamelibrary"
$BACKUPDATE = Get-Date -Format FileDate

mysqldump.exe gamelibrary --no-data > $BACKUP_FOLDER\$BACKUPDATE"_structure.sql"