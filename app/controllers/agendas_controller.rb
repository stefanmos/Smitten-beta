class AgendasController < ApplicationController

  def create
    @invite = Invite.find(params[:invite_id])
    @agenda = @invite.agendas.create(params[:agenda].permit(:name, :time))

    redirect_to invite_path(@invite)
  end

  def destroy
    @invite = Invite.find(params[:invite_id])
    @agenda = @invite.agendas.find(params[:id])
    @agenda.destroy
  end
end
