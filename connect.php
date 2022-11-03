<?
  $email = $_POST['signup-email'];
  $password = $_POST['signup-password'];
  $Cpassword = $_POST['signup-password-confirm'];

  $conn = new mysqli('localhost','root','','shopeasy');
  if($conn->connect_error)
  {
    die ('connection failed :'.$conn->connect_error);
  }
  else{
    $stmt = $conn->prepare("insert into sign-up(email, password, Cpassword) values(?, ?, ?)");
    $stmt->bind_param("sss",$email, $password, $Cpassword);
    $stmt->execute();
    echo "Sign up Successfully...";
    $stmt->close();
    $conn->close();
  }
?>