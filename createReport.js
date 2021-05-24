let fullHTML = "";

const starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./Assets/style.css">

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


module.exports = {

start: function startReport() 
{
    return starterHTML;
},

end: function endReport()
{
    return endingHTML;
},

addManager: function addManager(manager)
{
    return `<div id="manID" class='manCard'> 
    <h2 class='mHeader'> Team Manager </h2> 
    <P class='mName'> ${manager.name} </P>
    <p class="mID"> ${manager.id} </p>
    <p class="mEmail"> <a href=${manager.email}> Contact Email </a> </p>
    <p class='mOfficeNum'> ${manager.officeNumber} </p>
</div>
</div>
    <div class="title"> <h2> Team Members </h2>  </div>
    <div class = "teamContainer">`
},

addIntern: function addIntern(intern)
{

  return `
    <div class='teamCard'> 
        <h2 class='mHeader'> Intern </h2> 
        <P class='tName'> ${intern.name}  </P>
        <p class="tID"> ${intern.id} </p>
        <p class="tEmail"> ${intern.email}</p>
        <p class='tOther'><a href="">  ${intern.school} </a> </p>
    </div>`

},

addEngineer: function addEngineer(engineer)
{

return `
    <div class='teamCard'> 
        <h2 class='mHeader'> Engineer </h2> 
        <P class='tName'> ${engineer.name} </P>
        <p class="tID">${engineer.id}</p>
        <p class="tEmail">${engineer.email}</p>
        <p class='tOther'>${engineer.userName}</p>
    </div>`

}};