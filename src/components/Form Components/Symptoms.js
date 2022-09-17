import React,{ useEffect, useState} from 'react'
import { MultiSelect } from "react-multi-select-component";
import { BiChevronRight,BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Symptoms.css'
import img2 from '../../assets/section-title-line.png'

const options = [{label:"Abdominal Pain",value:"Abdominal Pain"},
{label:"Abnormal Menstruation",value:"Abnormal Menstruation"},
{label:"Acidity",value:"Acidity"},
{label:"Acute Liver Failure",value:"Acute Liver Failure"},
{label:"Altered Sensorium",value:"Altered Sensorium"},
{label:"Anxiety",value:"Anxiety"},
{label:"Back Pain",value:"Back Pain"},
{label:"Belly Pain",value:"Belly Pain"},
{label:"Blackheads",value:"Blackheads"},
{label:"Bladder Discomfort",value:"Bladder Discomfort"},
{label:"Blister",value:"Blister"},
{label:"Blood In Sputum",value:"Blood In Sputum"},
{label:"Bloody Stool",value:"Bloody Stool"},
{label:"Blurred And Distorted Vision",value:"Blurred And Distorted Vision"},
{label:"Breathlessness",value:"Breathlessness"},
{label:"Brittle Nails",value:"Brittle Nails"},
{label:"Bruising",value:"Bruising"},
{label:"Burning Micturition",value:"Burning Micturition"},
{label:"Chest Pain",value:"Chest Pain"},
{label:"Chills",value:"Chills"},
{label:"Cold Hands And Feet",value:"Cold Hands And Feet"},
{label:"Coma",value:"Coma"},
{label:"Congestion",value:"Congestion"},
{label:"Constipation",value:"Constipation"},
{label:"Continuous Feel Of Urine",value:"Continuous Feel Of Urine"},
{label:"Continuous Sneezing",value:"Continuous Sneezing"},
{label:"Cough",value:"Cough"},
{label:"Cramps",value:"Cramps"},
{label:"Dark Urine",value:"Dark Urine"},
{label:"Dehydration",value:"Dehydration"},
{label:"Depression",value:"Depression"},
{label:"Diarrhoea",value:"Diarrhoea"},
{label:"Dyschromic Patches",value:"Dyschromic Patches"},
{label:"Distention Of Abdomen",value:"Distention Of Abdomen"},
{label:"Dizziness",value:"Dizziness"},
{label:"Drying And Tingling Lips",value:"Drying And Tingling Lips"},
{label:"Enlarged Thyroid",value:"Enlarged Thyroid"},
{label:"Excessive Hunger",value:"Excessive Hunger"},
{label:"Extra Marital Contacts",value:"Extra Marital Contacts"},
{label:"Family History",value:"Family History"},
{label:"Fast Heart Rate",value:"Fast Heart Rate"},
{label:"Fatigue",value:"Fatigue"},
{label:"Fluid Overload",value:"Fluid Overload"},
{label:"Fluid Overload.1",value:"Fluid Overload.1"},
{label:"Foul Smell Of Urine",value:"Foul Smell Of Urine"},
{label:"Headache",value:"Headache"},
{label:"High Fever",value:"High Fever"},
{label:"Hip Joint Pain",value:"Hip Joint Pain"},
{label:"History Of Alcohol Consumption",value:"History Of Alcohol Consumption"},
{label:"Increased Appetite",value:"Increased Appetite"},
{label:"Indigestion",value:"Indigestion"},
{label:"Inflammatory Nails",value:"Inflammatory Nails"},
{label:"Internal Itching",value:"Internal Itching"},
{label:"Irregular Sugar Level",value:"Irregular Sugar Level"},
{label:"Irritability",value:"Irritability"},
{label:"Irritation In Anus",value:"Irritation In Anus"},
{label:"Itching",value:"Itching"},
{label:"Joint Pain",value:"Joint Pain"},
{label:"Knee Pain",value:"Knee Pain"},
{label:"Lack Of Concentration",value:"Lack Of Concentration"},
{label:"Lethargy",value:"Lethargy"},
{label:"Loss Of Appetite",value:"Loss Of Appetite"},
{label:"Loss Of Balance",value:"Loss Of Balance"},
{label:"Loss Of Smell",value:"Loss Of Smell"},
{label:"Loss Of Taste",value:"Loss Of Taste"},
{label:"Malaise",value:"Malaise"},
{label:"Mild Fever",value:"Mild Fever"},
{label:"Mood Swings",value:"Mood Swings"},
{label:"Movement Stiffness",value:"Movement Stiffness"},
{label:"Mucoid Sputum",value:"Mucoid Sputum"},
{label:"Muscle Pain",value:"Muscle Pain"},
{label:"Muscle Wasting",value:"Muscle Wasting"},
{label:"Muscle Weakness",value:"Muscle Weakness"},
{label:"Nausea",value:"Nausea"},
{label:"Neck Pain",value:"Neck Pain"},
{label:"Nodal Skin Eruptions",value:"Nodal Skin Eruptions"},
{label:"Obesity",value:"Obesity"},
{label:"Pain Behind The Eyes",value:"Pain Behind The Eyes"},
{label:"Pain During Bowel Movements",value:"Pain During Bowel Movements"},
{label:"Pain In Anal Region",value:"Pain In Anal Region"},
{label:"Painful Walking",value:"Painful Walking"},
{label:"Palpitations",value:"Palpitations"},
{label:"Passage Of Gases",value:"Passage Of Gases"},
{label:"Patches In Throat",value:"Patches In Throat"},
{label:"Phlegm",value:"Phlegm"},
{label:"Polyuria",value:"Polyuria"},
{label:"Prominent Veins On Calf",value:"Prominent Veins On Calf"},
{label:"Puffy Face And Eyes",value:"Puffy Face And Eyes"},
{label:"Pus Filled Pimples",value:"Pus Filled Pimples"},
{label:"Receiving Blood Transfusion",value:"Receiving Blood Transfusion"},
{label:"Receiving Unsterile Injections",value:"Receiving Unsterile Injections"},
{label:"Red Sore Around Nose",value:"Red Sore Around Nose"},
{label:"Red Spots Over Body",value:"Red Spots Over Body"},
{label:"Redness Of Eyes",value:"Redness Of Eyes"},
{label:"Restlessness",value:"Restlessness"},
{label:"Runny Nose",value:"Runny Nose"},
{label:"Rusty Sputum",value:"Rusty Sputum"},
{label:"Scurrying",value:"Scurrying"},
{label:"Shivering",value:"Shivering"},
{label:"Silver Like Dusting",value:"Silver Like Dusting"},
{label:"Sinus Pressure",value:"Sinus Pressure"},
{label:"Skin Peeling",value:"Skin Peeling"},
{label:"Skin Rash",value:"Skin Rash"},
{label:"Slurred Speech",value:"Slurred Speech"},
{label:"Small Dents In Nails",value:"Small Dents In Nails"},
{label:"Spinning Movements",value:"Spinning Movements"},
{label:"Spotting Urination",value:"Spotting Urination"},
{label:"Stiff Neck",value:"Stiff Neck"},
{label:"Stomach Bleeding",value:"Stomach Bleeding"},
{label:"Stomach Pain",value:"Stomach Pain"},
{label:"Sunken Eyes",value:"Sunken Eyes"},
{label:"Sweating",value:"Sweating"},
{label:"Swelled Lymph Nodes",value:"Swelled Lymph Nodes"},
{label:"Swelling Joints",value:"Swelling Joints"},
{label:"Swelling Of Stomach",value:"Swelling Of Stomach"},
{label:"Swollen Blood Vessels",value:"Swollen Blood Vessels"},
{label:"Swollen Extremities",value:"Swollen Extremities"},
{label:"Swollen Legs",value:"Swollen Legs"},
{label:"Throat Irritation",value:"Throat Irritation"},
{label:"Tiredness",value:"Tiredness"},
{label:"Toxic Look (Typhus)",value:"Toxic Look (Typhus)"},
{label:"Ulcers On Tongue",value:"Ulcers On Tongue"},
{label:"Unsteadiness",value:"Unsteadiness"},
{label:"Visual Disturbances",value:"Visual Disturbances"},
{label:"Vomiting",value:"Vomiting"},
{label:"Watering From Eyes",value:"Watering From Eyes"},
{label:"Weakness In Limbs",value:"Weakness In Limbs"},
{label:"Weakness Of One Body Side",value:"Weakness Of One Body Side"},
{label:"Weight Gain",value:"Weight Gain"},
{label:"Weight Loss",value:"Weight Loss"},
{label:"Yellow Crust Ooze",value:"Yellow Crust Ooze"},
{label:"Yellow Urine",value:"Yellow Urine"},
{label:"Yellowing Of Eyes",value:"Yellowing Of Eyes"},
{label:"Yellowish Skin",value:"Yellowish Skin"}];

export default function Symptoms() {
    const [selected, setSelected] = useState([]);
    const [arr, setarr] = useState([]);
    useEffect(() => {
      
        const arr2=[]  
        selected.forEach((e)=>{
          arr2.push(e.label)
        })
      
        setarr(arr2)
     
    }, [selected,setSelected])
    

  return (
    
    <section className='d-flex align-items-start form gray-bg'  style={{ minHeight: "78vh",paddingTop:"30px",flexDirection:'column'}}>
    <div className="container" >
      <h1 className='display-5' style={{fontFamily:"Domain Dis",lineHeight:1.1,color:"#223645",marginBottom:"4px",letterSpacing:"1px"}}>Select Symptoms</h1>
      <div className='pos-rel' style={{paddingBottom:"20px"}}>
                        <img src={img2} alt=""/>
                    </div>
      <h1 className='fs-6 mb-4 selected' style={{fontFamily:"SF Mono"}}>(Selected {(selected).length} out of {options.length})</h1>
      
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      
      <MultiSelect
        className='mb-4 w-75'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll={false}
      />
      {(selected).length>0?<div className='fs-5 selected2 d-flex' style={{fontFamily:"Calibre R"}}>
        <div style={{fontFamily:"Calibre M",color:"var(--first-color)",minWidth: "max-content",paddingRight:"15px",paddingLeft:"10px"}}>Symptoms : </div>
        <div style={{paddingBottom:"75px"}}>{arr.map((ele)=>{
          return(<li key={ele} style={{listStyleType:"square",fontFamily:"Calibre R"}}>{ele}</li>)})}</div>
        </div>:''}
      <div className='' style={{position:"absolute",bottom:0,paddingBottom:"0.5rem"}}>
      <Link to="/"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "#F7F7F7", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px",color:'var(--first-color)',fontFamily:'SF Mono' }}><BiChevronLeft size={24} style={{verticalAlign:"-7.5px"}}/>  Back</button></Link>
      </div>
      <div className='' style={{paddingRight:"3rem",position:"absolute",bottom:0,right:0,paddingBottom:"0.5rem"}}>
      <Link to="/form/disease"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "var(--first-color)", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px",color:'#FFF',fontFamily:'SF Mono' }}>Next <BiChevronRight size={24} style={{verticalAlign:"-7.5px"}}/> </button></Link>
      
      </div>
    </div>
    </section>
    
  )
}
