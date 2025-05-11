import axios from "axios";

// Base URL
const BASE_URL = "https://apps.gradstudyhall.com/staging";

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Fetch Dashboard Data Stats
export const fetchDashboardStats = async () => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${BASE_URL}/admin/operations/data-stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          component: "dashboard-data-stat",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

// Fetch Students
export const fetchStudents = async (studentid = null) => {
  const token = localStorage.getItem("authToken");

  const url = studentid
    ? `${BASE_URL}/admin/users/${studentid}`
    : `${BASE_URL}/admin/users`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        item_per_page: "20",
        page: "1",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

// Login API
export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/auths/login`, {
      email,
      password,
    });

    return response.data; // We just return the whole data and handle it in the component
  } catch (error) {
    console.error("Login error:", error);
    throw error; // re-throw so component can catch and display message
  }
};

export const fetchApplications = async () => {
  const token = localStorage.getItem("authToken"); // get token from localStorage

  if (!token) {
    // Redirect to login if no token
    window.location.href = "/login"; // <-- hard redirect
    return; // stop execution
  }
  try {
    const response = await axios.get(`${BASE_URL}/admin/users/applications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: 1, // fetch first page
        item_per_page: 10, // fetch 10 items per page
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

export const fetchApplicationById = async (applicationId = null) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  const url = applicationId
    ? `${BASE_URL}/admin/users/applications/${applicationId}`
    : `${BASE_URL}/admin/users/applications`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status === "ok") {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Failed to fetch application");
    }
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    throw error;
  }
};

export const fetchProgramTypes = async () => {
  const token = localStorage.getItem("authToken"); // get token from localStorage

  if (!token) {
    // Redirect to login if no token
    window.location.href = "/login"; // <-- hard redirect
    return; // stop execution
  }
  try {
    const response = await axios.get(
      `${BASE_URL}/admin/operations/degree-programs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: 1, // fetch first page
          item_per_page: 10, // fetch 10 items per page
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

export const fetchRequirements = async () => {
  const token = localStorage.getItem("authToken"); // get token from localStorage

  if (!token) {
    // Redirect to login if no token
    window.location.href = "/login"; // <-- hard redirect
    return; // stop execution
  }
  try {
    const response = await axios.get(
      `${BASE_URL}/admin/operations/requirements`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: 1, // fetch first page
          item_per_page: 10, // fetch 10 items per page
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

export const getCourses = async (courseId = "") => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  const url = courseId
    ? `${BASE_URL}/admin/operations/courses/${courseId}`
    : `${BASE_URL}/admin/operations/courses/`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: "1",
        item_per_page: "20",
      },
    });
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const getSchools = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.get(`${BASE_URL}/admin/operations/schools`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: "1",
        item_per_page: "10",
      },
    });
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const getStudentDocuments = async (user_id) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/admin/users/documents?user_id=${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: "1",
          item_per_page: "10",
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

// Login API
export const login_Admin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/auths/login`, {
      email,
      password,
    });

    return response.data; // We just return the whole data and handle it in the component
  } catch (error) {
    console.error("Login error:", error);
    throw error; // re-throw so component can catch and display message
  }
};

export const updateStudentDocuments = async (user_id, formData) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/users/documents/${user_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/form-data", // This is what you probably want
        },
        params: {
          page: "1",
          item_per_page: "10",
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const sendMessages = async (app_id, message) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/users/application-feedbacks`,
      {
        application_id: app_id,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // This is what you probably want
        },
        params: {
          page: "1",
          item_per_page: "10",
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const getAppFeeds = async (user_id) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/admin/users/application-feedbacks?user_id=${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: "1",
          item_per_page: "10",
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const updateApplicationStatus = async (applicationId, newStatus) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.put(
      `${BASE_URL}/admin/users/applications/${applicationId}`,
      { status: newStatus }, // Only sending the status field
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data; // Handle response as needed
  } catch (error) {
    console.error("Error updating application status:", error);
    throw error; // Propagate error for handling elsewhere
  }
};

export const createSchool = async ({
  school_name,
  country,
  state,
  website,
  logo,
}) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/operations/schools`,
      {
        school_name,
        country,
        state,
        website,
        logo: logo || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // <— this is key
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const createCourse = async (formData) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/operations/courses`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // <— this is key
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

export const createStudent = async ({
  first_name,
  last_name,
  email,
  phone_prefix,
  phone_number,
  nationality,
  degree,
  dob,
}) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/users`,
      {
        first_name,
        last_name,
        email,
        phone_prefix,
        phone_number,
        nationality,
        degree,
        dob,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // <— this is key
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const addApplication = async ({ course_id, user_id, intake_year }) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/admin/users/applications`,
      {
        course_id,
        user_id,
        intake_year,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // <— this is key
        },
      }
    );
    return response.data; // This will have { status: "ok", data: { ... } }
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};
