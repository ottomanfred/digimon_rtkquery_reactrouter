import api from "./api";

const digimonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDigimon: builder.query({
      query: () => "/digimon",
      transformResponse: (response) => response.content,
      providesTags: ["Digimon"],
    }),
    getDigimonById: builder.query({
      query: (id) => "/digimon/" + id,
      providesTags: ["Digimon"],
    }),
  }),
});

export const {
  useGetDigimonQuery,
  useGetDigimonByIdQuery,
} = digimonApi;
