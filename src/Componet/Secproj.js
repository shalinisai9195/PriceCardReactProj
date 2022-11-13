import React from "react"

function Secpro(props){
   return <>
{/* <!-- Project One --> */}
<div className="row">
  <div className="col-md-7">
    <a href="javascript{void}">
      <img className="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt=""/>
    </a>
  </div>
  <div className="col-md-5">
    <h3 className={props.data.head1Enabler?"":"text-muted"}><u>{props.data.head1}</u></h3>
    <p>{props.data.Parag}</p>
    <a className="btn btn-primary" href="javascript{void}">View Project</a>
  </div>
</div>
{/* <!-- /.row --> */}
<hr/>
   
 </>
}
export default Secpro;