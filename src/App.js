import Card from '../src/Componet/Card';



function App(){
  let plans =[
    {
    Plan:"FREE",
    price:0,
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    Community_Access:"Community Access",
    Community_AccessEnabler:false,
    Private_Projects:"Unlimite Private Projects",
    Private_ProjectsEnabler:false,
    PhoneSupport:"Dedicated support",
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  },
  {
     Plan:"Plus",
      price:9,
      user:"5 Users",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      Community_Access:"Community Access",
      Community_AccessEnabler:true,
      Private_Projects:"Unlimite Private Projects",
      Private_ProjectsEnabler:false,
      PhoneSupport:"Dedicated support",
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    },
    {
      Plan:"Pro",
      price:49,
      user:"Unlimited User",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      Community_Access:"Community Access",
      Community_AccessEnabler:true,
      Private_Projects:"Unlimite Private Projects",
      Private_ProjectsEnabler:true,
      PhoneSupport:"Dedicated support",
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:true
  
    }]
  

  return <>
    <section className="pricing py-5">
    <div className="container">
    <div className="row">
      {plans.map((e,i)=><Card data={e} key={i}/>)}
        
 </div> 
</div>  
</section>
  
   
</>  
}
export default App;
