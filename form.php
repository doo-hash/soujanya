<!DOCTYPE HTML>
<HTML>
    <head>
        <title>
            Registration Form
        </title>
        <style>
            .error{
                color: red;
            }
        </style>
    </head>
    <body>
    <?php
$sname=$uname=$gender=$psd="";
$snameErr=$unameErr=$genderErr=$psdErr="";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(empty($_POST["sname"])){
        $snameErr="name is required!";
    }else{
        $sname=test_input($_POST["sname"]);
        if(!preg_match("/^[a-zA-Z-' ]*$/",$sname)){
            $snameErr="only letters and white spaces are allowed";
        }
    }
    if(empty($_POST["uname"])){
        $unameErr="name is required!";
    }else{
        $uname=test_input($_POST["uname"]);
        if(!preg_match("/^[a-zA-Z-' ]*$/",$uname)){
            $unameErr="only letters and white spaces are allowed";
        }
    }
    if(empty($_POST["gender"])){
        $genderErr="Gender is required!";
    }else{
        $gender=test_input($_POST["gender"]);
    }
    if(empty($_POST["psd"])){
        $psdErr="Password is required!";
    }else{
        $psd=test_input($_POST["psd"]);
        if(!preg_match("/^[a-zA-Z0-9-' ]*$/",$psd)){
            $psdErr="only letters, numbers and white spaces are allowed";
        }
    }
}
function test_input($data){
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    return $data;
}
?>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
            <div>
                <label>NAME:
                <input type="text" name="sname" value="<?php echo $sname ?>">
                <span class="error">*<?php echo $snameErr; ?></span>
                </label>
            </div>
            <div>
                <label>USERNAME:
                <input type="text" name="uname" value="<?php echo $uname ?>">
                <span class="error">*<?php echo $unameErr; ?></span>
                </label>
            </div>
            <div>
            <label>GENDER:
            <input type="radio" name="gender" value="male" <?php if(isset($gender) && $gender=="male") echo "checked"; ?>>Male
            <input type="radio" name="gender" value="female" <?php if(isset($gender) && $gender=="female") echo "checked"; ?>>Female
            <span class="error">*<?php echo $genderErr; ?></span>
            </label>
            </div>
            <div>
                <label>PASSWORD:
                <input type="password" name="psd" value="<?php echo $psd ?>">
                <span class="error">*<?php echo $psdErr; ?></span>  
                </label>
            </div>
            <div>
                <input type="submit">
                <input type="reset">
            </div>
        </form>
        <?php
    
   $servername="localhost";
    $username="root";
    $password="Souji@1216";
    $dbname="souji";
    
    $conn=new mysqli($servername,$username,$password,$dbname);
    if($conn===false){
        die ("connection failed". $conn->connect_error);
    }else{
    echo "connected successfully";}
   $sname=$conn->real_escape_string($_REQUEST['sname']);
   $uname=$conn->real_escape_string($_REQUEST['uname']);
   $gender=$conn->real_escape_string($_REQUEST['gender']);
   $psd=$conn->real_escape_string($_REQUEST['psd']);
//    $sql="CREATE TABLE MyTab(eid INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,sname VARCHAR(30) NOT NULL,
  //  uname VARCHAR(30) NOT NULL,gender VARCHAR(30) NOT NULL,password1 VARCHAR(30) NOT NULL);";
    //$sql1="INSERT INTO Mytab (sname,uname,gender,psd) VALUES ('$sname','$uname','$gender','$psd');";
    $sql1="INSERT INTO Mytab (sname,uname,gender,psd) VALUES (?,?,?,?);";
    if($stmt=$conn->prepare($sql1)){
        $stmt->bind_param("ssss",$sname,$uname,$gender,$psd);
        $sname=$_REQUEST['sname'];
        $uname=$_REQUEST['uname'];
        $gender=$_REQUEST['gender'];
        $psd=$_REQUEST['psd'];
        $stmt->execute();
        echo "records inserted";
    }else{
        echo "error: ".$conn->error;
    }
    $sql="SELECT * FROM Mytab";
//    if($conn->query($sql1)===TRUE){
  //      echo "records inserted successfully";
    //}else{
 //       echo "error".mysqli_error($conn);
   // }
    if($result=mysqli_query($conn,$sql)){
        if(mysqli_num_rows($result)>0){
            echo "<table><tr>
            <th>SNAME</th>
            <th>UNAME</th>
            <th>GENDER</th>
            <th>PASSWORD</th>
        </tr>";
        while($row=mysqli_fetch_array($result)){
        echo "<tr>".
            "<td>". $row['sname']."</td>".
           " <td>".$row['uname']."</td>".
            "<td>".$row['gender']."</td>".
            "<td>".$row['psd']."</td></tr>";
        }echo "</table>";
        mysqli_free_result($result);
    }else{
        echo "no records found";
    }
}else{
    echo "error: ".mysqli_error($conn);
}
mysqli_close($conn);
?>
    </body>
</HTML>