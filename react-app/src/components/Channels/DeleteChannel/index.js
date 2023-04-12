import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteChannelThunk } from "../../../store/channel";

function DeleteChannelModal({ channel }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDeleteChannel = async (e) => {
    e.preventDefault();
    await dispatch(deleteChannelThunk(channel.id));
    closeModal();
  };

  const handleKeepChannel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <h1>Confirm Delete 😟</h1>
      <h2>Are you sure you want to delete this channel? </h2>
      <button
        className="yes-delete-yeet"
        onClick={handleDeleteChannel}
      >{`Yes 👌`}</button>

      <button
        className="no-delete"
        onClick={handleKeepChannel}
      >{`No ❌`}</button>
    </div>
  );
}

export default DeleteChannelModal;
