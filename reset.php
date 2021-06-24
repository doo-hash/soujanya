<html>
<head>
</head>
<body>
<?php
$name=$nameErr="";
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(empty($_POST['sname'])){
        $nameErr="name is required";
    }else{
        if(isset($_POST['sname'])){
            $name=$_POST["sname"];
            $nameErr="";
        }
    if(isset($_POST['s'])){
        $name=$_POST["sname"];
    }else if(isset($_POST["rst"])){
        $name=$nameErr="";
        echo "all reset";
    }}
}
?>
<form action="" method="POST">
name:<input type="text" name="sname" value="">
<span>*<?php echo $nameErr; ?></span>
<span><?php echo $name ?></span>
<input type="submit" name="s">
<br>
<input type="reset" name="rst">
</form>
</body>
</html>