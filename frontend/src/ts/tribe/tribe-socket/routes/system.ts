import Socket from "../socket";

async function versionCheck(
  expectedVersion: string
): Promise<TribeSocket.VersionCheckResponse> {
  return new Promise((resolve) => {
    Socket.emit(
      "system_version_check",
      { version: expectedVersion },
      (response: TribeSocket.VersionCheckResponse) => {
        resolve(response);
      }
    );
  });
}

function connect(callback: () => void): void {
  Socket.on("connect", callback);
}

function disconnect(callback: () => void): void {
  Socket.on("disconnect", callback);
}

function connectFailed(callback: () => void): void {
  Socket.on("connect_failed", callback);
}

function connectError(callback: () => void): void {
  Socket.on("connect_error", callback);
}

export default {
  in: {
    connect,
    disconnect,
    connectFailed,
    connectError,
  },
  out: {
    versionCheck,
  },
};