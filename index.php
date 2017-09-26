<!DOCTYPE html>
<html>
<head>
    <script src="ajax.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <style>
        a.menuactive:link    { color: red; }
    </style>
</head>
<body>
    <div id="webshopcontainer">
        <nav>
            <li><a class="menuactive" href="javascript:;" onclick="foobar_a()">click me A</a></li>
            <li><a href="javascript:;" onclick="foobar_b()">click me B</a></li> 
            <li><a href="javascript:;" onclick="foobar_c()">click me C</a></li>
        </nav>
        <div id="content">
        <!-- ajax pages load here --> 
        </div>
    </div>
    <footer>
        <p>footer text</p>
    </footer>
</body>
</html>
