//skills chart JS
const ctx = document.getElementById("myChart").getContext("2d");
const data = {
  labels: ["Website Design", "UX Design", "Marketing", "Javascript", "HTML & CSS", "Ruby on Rails", "Tech Demos", "Leading Teams"],
  datasets: [{
    label: "Percieved Interest",
    fillColor: "rgba(43,176,212,.4)",
    strokeColor: "rgba(43,176,212,1)",
    pointColor: "rgba(43,176,212,1)",
    pointHighlightStroke: "rgba(43,176,212,1)",
    data: [100, 70, 85, 90, 95, 75, 90, 100]
  }, {
    label: "Relative Skill",
    fillColor: "rgba(140,200,50,.4)",
    strokeColor: "rgba(140,200,50,1)",
    pointColor: "rgba(140,200,50,1)",
    pointHighlightStroke: "rgba(140,200,50,1)",
    data: [85, 75, 70, 80, 85, 60, 75, 50]
  }]
};
new Chart(ctx).Radar(data, {
  animationSteps: 30,
  animationEasing: "easeInOutExpo",
  responsive: true,
  showTooltips: true,
  scaleOverride: true,
  scaleSteps: 5,
  scaleStepWidth: 20,
  scaleStartValue: 0,
  scaleLineColor: "#e2bf96b4",

  angleShowLineOut: true,
  angleLineWidth: 1,
  angleLineColor: "rgba(200,200,250,.15)",
  pointLabelFontFamily: "'freight-sans-pro', Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
  pointLabelFontSize: 14,
  pointLabelFontColor: "#e2bf96b4",
  pointDot: false,
  datasetStrokeWidth: 1
});