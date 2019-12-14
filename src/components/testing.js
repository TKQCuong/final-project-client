window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      document.getElementById("service_content").style.display = "none";
    } else {
      document.getElementById("service_content").style.display = "initial";
    }
  }


  <div className="ordering-process">
        {/* <div style={{ padding: 50, height: 500, width: 500, backgroundColor: getColor(), border: '1px solid red'}}>
                    {getForm()}
                </div> */}
        <div style={{ paddingLeft: 60, paddingTop: 50, paddingBottom: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step === 1 ? "#83e5de" : "#83e5de"
            }}
            className="schedule_badge"
          >
            {/* <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_569724046.jpg"></img> */}
            Service detail<br></br>
            <small>Select your type of service</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              // backgroundColor: step === 2 ? "#83e5de": "rgba(232, 232, 232, 1)"
              backgroundColor: step === 1 ? "rgba(232, 232, 232, 1)" : "#83e5de"
            }}
            className="schedule_badge"
          >
            Date and Time<br></br>
            <small>Select service date and time</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor:
                step === 3 || step === 4 ? "#83e5de" : "rgba(232, 232, 232, 1)"
            }}
            className="schedule_badge"
          >
            Address<br></br>
            <small>Select service address</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step !== 4 ? "rgba(232, 232, 232, 1)" : "#83e5de"
            }}
            className="schedule_badge"
          >
            Review and Schedule<br></br>
            <small>Review your order and schedule</small>
          </Badge>
        </div>
      </div>