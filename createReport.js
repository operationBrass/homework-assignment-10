let fullHTML = "";
const starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Weather Forecast</title>
    <link rel="stylesheet" href="../Assets/style.css">

</head>
<body>

<div class="container">
    <header class="header"> 
        <h1 class="title"> Team Manager </h1>
    </header>

<div class="teamProfileContainer"> 

        <!-- team managers card --> `

const endingHTML = 
` </div>
<footer class="footer"> <h2 class="title"> <i>OperationBrass - Brendan Lewis 2021 </i></h2></footer>
</div>
</body>
</html>`



function startReport() 
{
    return starterHTML;
};

function endReport()
{
    return endingHTML;
}

function addManager(manager)
{
    return `<div id="manID" class='manCard'> 
    <h2 class='mHeader'> </h2> 
    <P class='mName'>  </P>
    <p class="mID"></p>
    <p class="mEmail"></p>
    <img src=''> 
    <p class='mOfficeNum'></p>
</div>
</div>
    <div class="title"> <h2> Team Members </h2>  </div>`
}

function addIntern(intern)
{

  return `<div class = "teamContainer">
    <div class='teamCard'> 
        <h2 class='mHeader'> </h2> 
        <P class='tName'>  </P>
        <p class="tID"></p>
        <p class="tEmail"></p>
        <img src=''> 
        <p class='tOther'></p>
    </div>`

}

function addEngineer(engineer)
{

return `<div class = "teamContainer">
    <div class='teamCard'> 
        <h2 class='mHeader'> </h2> 
        <P class='tName'>  </P>
        <p class="tID"></p>
        <p class="tEmail"></p>
        <img src=''> 
        <p class='tOther'></p>
    </div>`

}
