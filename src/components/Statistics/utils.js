export const convertLabels = (labels) => {
  let formattedLabels = [];
  labels.forEach((label) =>
    formattedLabels.push(label.split(" ")[1].split(".")[0])
  );
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
