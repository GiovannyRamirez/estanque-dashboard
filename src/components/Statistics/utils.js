import { MONTHS } from "../../constants";

export const convertLabels = (labels) => {
  let formattedLabels = [];
  labels.forEach((label) => {
  const date = new Date(label);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  formattedLabels.push(`${day} ${month} ${hour}:${minute}:${second}`);
});

  return formattedLabels;
};

export const convertDatasets = (data) => {
  const datasets = [];
  data.forEach(({ label, data, color }) => {
    if (data.length) {
      return datasets.push({
        label,
        data,
        backgroundColor: color,
        borderColor: color,
      });
    }
  });
  return datasets;
};
