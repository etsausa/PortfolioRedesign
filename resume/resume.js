fetch("./resume/resume.json")
  .then((response) => response.json())
  .then((job) => {
    // console.log(json);

    const resume = document.getElementById("resume");
    let jobContainer = document.createElement("div");

    job.jobs.forEach((job) => {
      console.log(job.title);
      //START

      //TITLE
      let title = document.createElement("h3");
      title.classList.add("jobTitle");
      title.append(job.title);
      jobContainer.append(title);

      //COMPANY
      let company = document.createElement("h4");
      company.classList.add("jobCompany");
      company.append(job.company);
      jobContainer.append(company);

      //DATE
      let date = document.createElement("i");
      date.classList.add("jobDate");
      if(job.endDate == ``){
        date.append(job.startDate + " - Present");
      } else { 
        date.append(job.startDate + " - " + job.endDate);
      }
      jobContainer.append(date);

      //DESCRIPTIONS
      let descriptions = document.createElement("ul");
      descriptions.classList.add("jobDescriptions");
      job.descriptions.forEach(description =>{
        let li = document.createElement("li");
        li.append(description);
        descriptions.append(li);
      })
   
      jobContainer.append(descriptions);

      //END
      let divider = document.createElement("hr");
      jobContainer.append(divider);
    });

    resume.append(jobContainer);
  });
