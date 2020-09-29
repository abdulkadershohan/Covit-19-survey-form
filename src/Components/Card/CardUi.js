import React from "react";

 const CardUi=props=>{
     return(
         <>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} className={"card-img-top"} alt="ImageUpdate"/>
                </div>
               <div className="card-body text-dark">
                   <h4 className="card-title">Card Title</h4>
                   <p className="card-text text-secondary">

                       In this tutorial, React Card UX Component with Bootstrap. We gonna learn how to create a reusable component using React. well, it is very easy to create a component in react. if you want to learn  react don't forget to watch the react course to learn react.
                       If you have any question then comment me or
                   </p>
                   <a href="/home" className="btn btn-outline-success">go anywhere</a>
               </div>
            </div>


         </>

     );

}
export default CardUi