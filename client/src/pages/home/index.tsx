import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { sendMessageMutation } from "../../services/MessageService";

export const HomePage = () => {
  const { mutate, isSuccess, error, isLoading } = sendMessageMutation();
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
    mutate(
      {
        text: data.text,
        channel: data.channel,
      },
      {
        onError(error) {
          console.log(error);
        },
      }
    );
  }

  return (
    <>
      <Header title="Home" />

      <div className="flex">
        <div className="p-6 rounded-lg bg-gray-800">
          <h1 className="mb-6">Enviar mensagem</h1>

          {isLoading ? <div>Enviando...</div> : null}
          {error ? <div>Erro ao enviar mensagem</div> : null}
          {isSuccess ? <div>Mensagem enviada com sucesso</div> : null}

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-control">
              <label htmlFor="text">Mensagem</label>
              <input type="text" className="input" {...register("text")} />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Canal</label>
              <input type="text" className="input" {...register("channel")} />
            </div>

            <button type="submit" className="button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
