import React from 'react'
import './Notes.css';
export default function Notes() {
    /*LOGIC FOR PRE,CUR AND NXT DATE COMPUTATION*/
    const d =new Date();
    let pre,nxt;
    let year =d.getFullYear();

    let day =d.getDate();
    let month =d.getMonth();

    if(day>1 && day<28 || day==29 || day==30){
        pre =day-1;
        nxt =day+1;
    }else if(day==28 && year%4 ==0 && month ==2){
        pre =27;
        nxt =1;
    }else if(day ==1){
        nxt =2;
        if(month ==3){
            if(year%4 ==0){
                pre =29;
            }else{
                pre =28;
            }
        }else if(month ==1 || month ==2 || month ==4 || month ==6 || month ==8 || month ==9 || month ==11){
            pre =31;
        }else{
            pre =30;
        }
    }else if(day ==30){
        pre =29;
        if(month ==4 || month ==6 || month ==9 || month ==11){
            nxt =1;
        }else{
            nxt =31;
        }
    }
    /*END*/
  return (
    <div>
        <h1>Notes</h1>
        <p>try to build don't stop</p>
        <div className='circle-container-mgr'>
            <div className='circle-container'>
                <div id='top-circle' className='circle'>
                    <div>
                        {nxt}
                    </div>
                </div>
            </div>
            <div className='circle-container'>
                <div id='middle-circle' className='circle'>
                <div>{d.getDate()}</div>
                </div>
            </div>
            <div className='circle-container'>
                <div id ='bottom-circle' className='circle'>
                    <div>
                        {pre}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
