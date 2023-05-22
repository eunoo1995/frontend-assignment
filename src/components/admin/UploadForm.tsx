import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useUploadProduct } from "../../hooks/useUploadProduct";

const StyledButton = styled(Button)`
  background-color: #eee;
  border: none;
  border-radius: 2px;
  height: 40px;
  font-weight: bold;
  color: #222;
`;

const HiddenInput = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const ImageLabel = styled.label`
  width: 500px;
  border: 2px solid #eee;
  border-radius: 6px;
`;

const PlusIcon = styled(AddIcon)`
  color: #999;
  font-size: 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UploadForm = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
    size: "",
    color: "",
    category: "",
  });
  const { mutate } = useUploadProduct();
  const navigate = useNavigate();

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    mutate({
      ...form,
      size: form.size.split(","),
      color: form.color.split(","),
      imageURL:
        "https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Black_1673337663685.jpg",
    });
    navigate("/products");
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: "1000px", marginY: "40px", marginX: "auto" }}
    >
      <ImageLabel htmlFor="upload-image">
        <PlusIcon />
      </ImageLabel>
      <HiddenInput type="file" id="upload-image" />
      <Stack
        width="500px"
        paddingLeft="40px"
        justifyContent="space-between"
        gap={2}
      >
        <TextField
          id="title"
          name="title"
          label="title"
          variant="outlined"
          value={form.title}
          onChange={handleChange}
        />
        <TextField
          id="category"
          name="category"
          label="category"
          variant="outlined"
          value={form.category}
          onChange={handleChange}
        />
        <TextField
          type="number"
          id="price"
          name="price"
          label="price"
          variant="outlined"
          value={form.price}
          onChange={handleChange}
        />
        <TextField
          id="description"
          name="description"
          label="description"
          multiline
          rows={4}
          value={form.description}
          onChange={handleChange}
        />
        <TextField
          id="size"
          name="size"
          label="size (separate with commas)"
          variant="outlined"
          value={form.size}
          onChange={handleChange}
        />
        <TextField
          id="color"
          name="color"
          label="color (separate with commas)"
          variant="outlined"
          value={form.color}
          onChange={handleChange}
        />
        <StyledButton onClick={handleSubmit}>product upload</StyledButton>
      </Stack>
    </Stack>
  );
};
