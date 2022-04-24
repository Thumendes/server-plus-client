import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { sendMessageMutation } from "../../services/mutations";
import { Link } from "react-router-dom";

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

      {isLoading && (
        <div className="alert bg-cyan-500">Enviando mensagem...</div>
      )}

      {error && (
        <div className="alert bg-red-500">Erro: {(error as Error).message}</div>
      )}

      {isSuccess && (
        <div className="alert bg-green-500">Mensagem enviada com sucesso!</div>
      )}

      <div className="flex flex-col items-start gap-6">
        <h1>Enviar mensagem</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-control">
            <label htmlFor="text">Mensagem</label>
            <input
              type="text"
              placeholder="Mensagem"
              className="input"
              {...register("text")}
            />
          </div>

          <div className="form-control">
            <label htmlFor="channel">Canal</label>
            <input
              type="text"
              placeholder="Canal"
              className="input"
              {...register("channel")}
            />
          </div>

          <button type="submit" className="button">
            Enviar
          </button>
        </form>

        <Link to="/todos">Ir para todos page</Link>
      </div>
    </>
  );
};
