import Image from "next/image";
import React, { useState, FormEvent } from "react";
import api from "../../lib/api";
import { MusicType } from "../../@types/music";
import Modal from "../modal";
import close from "../../assets/svg/close.svg";
import copy from "../../assets/svg/copy.svg";
import search from "../../assets/svg/search.svg";

const SearchMusicComponent = () => {
  const [musicData, setMusicData] = useState<MusicType | null>(null);
  const [error, setError] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get("searchInput") as string;

    const minDate = new Date("1900-01-01");
    const maxDate = new Date("2020-12-30");

    const selectedDate = new Date(inputValue);

    if (!inputValue) {
      setError("Digite alguma data, por favor!");
      return;
    }

    if (selectedDate < minDate || selectedDate > maxDate) {
      setError("A data deve estar entre 01/01/1900 e 30/12/2020!");
      return;
    } else {
      setError("");
    }

    setSelectedDate(inputValue);

    try {
      const data = await api.get(`musics/show/${inputValue}`);
      setMusicData(data);
    } catch (error) {
      console.error("Erro ao buscar música:", error);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleCloseModal = () => {
    setMusicData(null);
  };

  const formatDate = (date: Date) => {
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Link copiado para a área de transferência: " + text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      },
      (err) => {
        console.error("Erro ao copiar o link: ", err);
      }
    );
  };

  return (
    <div className="relative flex justify-center items-center">
  <div className="-mt-6 max-w-xs rounded-3xl bg-white p-8 text-center shadow-md">
        <form
          className="flex flex-col justify-center gap-4 text-center"
          onSubmit={handleSearch}
          noValidate
        >
          <label>
            <span className="text-lg font-bold text-secondary">
              Encontrar a música
            </span>
          </label>
          <input
            id="searchInput"
            name="searchInput"
            type="date"
            className="rounded-md border-quarter shadow-sm focus:ring-1 focus:ring-secondary"
            min="1900-01-01"
            max="2020-12-30"
            onChange={handleDateChange}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="mx-auto flex gap-2 rounded-lg bg-secondary px-6 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient active:bg-gradient"            >
            <Image src={search} alt="pesquisar" width={20} height={20} />
            Pesquisar
          </button>
        </form>

        <Modal show={!!musicData}>
          <div className="flex-col text-center">
            <div className="inline-flex rounded-t-lg border-2 border-solid border-quarter bg-terciary px-10 py-1 text-center font-alt font-bold">
              {selectedDate && formatDate(new Date(selectedDate))}
            </div>
            <div className="rounded-xl border-2 border-solid border-quarter bg-primary px-10 py-10">
              <iframe
                className="w-full rounded-lg "
                width="360"
                height="200"
                src={"https://" + musicData?.youtubeUrl}
                title="Embedded Video"
                allowFullScreen
              ></iframe>

              <button
                className="mx-auto mt-4 flex gap-2 rounded-lg bg-secondary px-6 py-2 font-semibold text-white transition duration-300 hover:bg-gradient active:bg-gradient"
                onClick={() => {
                  const youtubeUrl = musicData?.youtubeUrl || "";
                  copyToClipboard(`https://${youtubeUrl}`);
                }}
              >
                <Image src={copy} alt="copiar" width={20} height={20} />
                {copied ? "Link Copiado!" : "Copiar link"}
              </button>

              <button
                className="absolute left-3 top-14 rounded-full bg-quarter text-white hover:bg-gradient "
                onClick={handleCloseModal}
              >
                <Image src={close} alt="fechar" width={32} height={32} />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SearchMusicComponent;
