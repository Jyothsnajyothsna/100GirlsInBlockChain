<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" name="frm">
        <center>
        NAME:<input type="text" name="name" id="name" placeholder="enter ur name" value=""><br/><br/>
        AGE:<input type="text" name="age" id="age" placeholder="enter ur age" value=""><br/><br/>
        <input type="submit" name="submit" id="submit" placeholder="enter ur age" value="submit form"><br/><br/>
    </center>
    <center>
    <p id="paragraph">hello this is the demo for mouseover event!!.....<br/>
There are many events available in JavaScript that you can utilize in your web applications. <br/>
Here is a list of some commonly used events:<br/>
1. Mouse Events:<br/>
   - `click`: Triggered when the mouse button is clicked.<br/>
   - `dblclick`: Triggered when the mouse button is double-clicked.<br/>
   - `mouseover`: Triggered when the mouse pointer enters an element.<br/>
   - `mouseout`: Triggered when the mouse pointer leaves an element.<br/>
   - `mousemove`: Triggered when the mouse pointer moves over an element.<br/>
   - `mousedown`: Triggered when the mouse button is pressed down on an element.<br/>
   - `mouseup`: Triggered when the mouse button is released on an element.<br/>
    </p>
</center>
    </form>
    <script>
        function handleclick()
        {
            alert('form submitted successfully');
        }
        function onmouseover()
        {
            alert('mouse over event occured');
        }
        function onmouseout()
        {
            alert('mouse out event occured');
        }
        function onkeypress()
        {
            alert('keyboard key is pressed');
        }
        function onresize()
        {
            alert('window resized');
        }
        function onload()
        {
            alert('page reloaded');
        }
        function onscroll()
        {
            alert('page reloaded');
        }

 document.getElementById("submit").addEventListener('click',handleclick);
        document.getElementById("paragraph").addEventListener('mouseover',onmouseover);
        document.getElementById("paragraph").addEventListener('mouseout',onmouseout);
addEventListener('keypress',onkeypress);
addEventListener('resize',onresize);
addEventListener('load',onload);
addEventListener('scroll',onscroll);
 </script>
</body>
</html>
