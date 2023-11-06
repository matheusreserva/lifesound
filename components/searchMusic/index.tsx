import Image from "next/image";
import React, { useState, FormEvent } from 'react';
import api from '../../lib/api';
import { MusicType } from '../../@types/music';
import Modal from '../modal';
import close from '../../assets/svg/close.svg';
import copy from '../../assets/svg/copy.svg';

const SearchMusicComponent = () => {
  const [musicData, setMusicData] = useState<MusicType | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get('searchInput') as string;

    const minDate = new Date('1900-01-01');
    const maxDate = new Date('2020-12-30');

    const selectedDate = new Date(inputValue);

    if (!inputValue) {
      setError('Digite alguma data, por favor!');
      return;
    }

    if (selectedDate < minDate || selectedDate > maxDate) {
      setError('A data deve estar entre 01/01/1900 e 30/12/2020!');
      return;
    } else {
      setError('');
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
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Link copiado para a área de transferência: ' + text);
        setCopied(true); 
        setTimeout(() => {
          setCopied(false); 
        }, 3000); 
      },
      (err) => {
        console.error('Erro ao copiar o link: ', err);
      }
    );
  };

  return (
    <div className="max-w-xs mx-auto bg-white p-8 rounded-3xl shadow-md">
      <form className="gap-4 justify-center flex flex-col text-center" onSubmit={handleSearch} noValidate>
        <label>
          <span className="text-lg text-secondary font-bold">Encontrar a música</span>
        </label>
        <input
          id="searchInput"
          name="searchInput"
          type="date"
          placeholder="Digite uma data"
          className="border-quarter rounded-md shadow-sm focus:ring-1 focus:ring-secondary"
          min="1900-01-01"
          max="2020-12-30"
          onChange={handleDateChange}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button type="submit" className="bg-secondary text-white font-semibold rounded-lg py-2 hover:bg-gradient transition duration-300">
          Pesquisar
        </button>
      </form>

      <Modal show={!!musicData}>
        <div className="flex-col text-center">
          <div className="font-alt bg-terciary text-center inline-flex px-10 py-1 font-bold rounded-t-lg border-solid border-2 border-quarter">
            {selectedDate && formatDate(new Date(selectedDate))}
          </div>
          <div className="bg-primary px-10 py-10 rounded-xl border-solid border-2 border-quarter">
            <iframe
              className="w-full rounded-lg "
              width="360"
              height="200"
              src={"https://" + musicData?.youtubeUrl}
              title="Embedded Video"
              allowFullScreen
            ></iframe>

            <button
              className="mt-4 mx-auto flex gap-2 bg-secondary text-white font-semibold rounded-lg py-2 px-6 hover:bg-gradient active:bg-gradient transition duration-300"
              onClick={() => {
                const youtubeUrl = musicData?.youtubeUrl || '';
                copyToClipboard(`https://${youtubeUrl}`);
              }}
            >
              <Image src={copy} alt="fechar" width={20} height={20} />
              {copied ? 'Link Copiado!' : 'Copiar link'}
            </button>

            <button className='absolute left-3 top-14 rounded-full bg-quarter text-white hover:bg-gradient ' onClick={handleCloseModal}>
              <Image src={close} alt="fechar" width={32} height={32} />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchMusicComponent;
