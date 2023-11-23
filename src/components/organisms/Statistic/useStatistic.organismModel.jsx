import {
  useCustomerStatistic,
  useFundraisingStatistic,
  useVolunteerStatistic,
} from "@/config/redux/statistic/statisticSelector";
import {
  getCustomerStatistic,
  getFundraisingStatistic,
  getVolunteerStatistic,
} from "@/config/redux/statistic/statisticThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useStatisticOrganismModel = (variant) => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const customerStatistic = useCustomerStatistic();
  const volunteerStatistic = useVolunteerStatistic();
  const fundraisingStatistic = useFundraisingStatistic();
  useEffect(() => {
    if (variant === "customer") {
      dispatch(getCustomerStatistic({ token }));
    } else if (variant === "volunteer") {
      dispatch(getVolunteerStatistic({ token }));
    } else if (variant === "fundraising") {
      dispatch(getFundraisingStatistic({ token }));
    }
  }, [dispatch, token, variant]);

  let dataStatistic;
  let titleStatistic;
  if (variant === "customer") {
    dataStatistic = customerStatistic;
    titleStatistic = "Customer Statistics";
  } else if (variant === "volunteer") {
    dataStatistic = volunteerStatistic;
    titleStatistic = "Volunteer Statistics";
  } else if (variant === "fundraising") {
    dataStatistic = fundraisingStatistic;
    titleStatistic = "Fundraising Statistics";
  }

  const graphData = dataStatistic?.graph?.map((item) => item.data);
  const graphLabel = dataStatistic?.graph?.map((item) => item.label);
  const data = {
    labels: graphLabel,
    datasets: [
      {
        label: titleStatistic,
        backgroundColor: "#444CE7",
        borderColor: "#444CE7",
        data: graphData,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      // menghilangkan nama label
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    // agar aspect rasionya bisa dicustom
    maintainAspectRatio: false,
    // mengatur border radius
    borderRadius: 5.5,
    // mengatur ketebalan bar
    barThickness: 14.7,
    scales: {
      x: {
        grid: {
          display: false, // Menghilangkan grid pada sumbu-x
        },
      },
      y: {
        grid: {
          display: false, // Menghilangkan grid pada sumbu-y
        },
      },
    },
  };
  return {
    data,
    options,
    dataStatistic,
    titleStatistic,
  };
};

export default useStatisticOrganismModel;
