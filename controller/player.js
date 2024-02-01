const { render } = require("pug");
const player = require("../model/palyer");

exports.saveNewPlayer = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const matches = req.body.matches;
  const fifty = req.body.fifty;
  const hundreds = req.body.hundreds;
  const age = req.body.age;
  const dob = new Date(req.body.DOB);
  const profile = req.body.profile;
  const birthplace = req.body.birthplace;
  const career = req.body.career;
  const avg = req.body.avg;
  const wicket = req.body.wicket;
  player
    .create({
      name,
      matches,
      fifty,
      hundreds,
      age,
      dob,
      profile,
      birthplace,
      career,
      avg,
      wicket,
    })
    .then((result) => {
      console.log(result);
      res.send("success");
    })
    .catch((err) => {
      console.log(err);
      res.send("Some error");
    });
};

exports.findPlayerByName = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  console.log(name);
  if (!name) {
    res.send("Invalid name");
  } else {
    player
      .findOne({ where: { name: name } })
      .then((result) => {
        console.log("found palyer");
        res.render("detail", {
          data: result,
          path: "/detail",
          pageTitle: "Player Details",
        });
      })
      .catch((err) => console.log(err));
  }
};

exports.editPlayer = (req, res, next) => {
  const id = req.body.id;
  console.log("inside edit");
  console.log({ id });
  player
    .findOne({ where: { id: id } })
    .then((result) => {
      const dateObject = new Date(result.dob);

      const year = dateObject.getFullYear();
      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
      const day = dateObject.getDate().toString().padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      res.render("edit", {
        data: result,
        dob: formattedDate,
        path: "/edit",
        pageTitle: "Edit Player",
      });
    })
    .catch((err) => console.log(err));
};

exports.editPlayerSubmit = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const matches = req.body.matches;
  const fifty = req.body.fifty;
  const hundreds = req.body.hundreds;
  const age = req.body.age;
  const dob = req.body.DOB;
  const profile = req.body.profile;
  const birthplace = req.body.birthplace;
  const career = req.body.career;
  const avg = req.body.avg;
  const wicket = req.body.wicket;

  player
    .update(
      {
        name: name,
        matches: matches,
        fifty: fifty,
        hundreds: hundreds,
        age: age,
        dob: dob,
        profile: profile,
        birthplace: birthplace,
        career: career,
        avg: avg,
        wicket: wicket,
      },
      { where: { id: id } }
    )
    .then((result) => {
      console.log({ result });
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
