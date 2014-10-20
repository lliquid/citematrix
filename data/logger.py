from datetime import datetime


def info(infostr):
    print('[INFO]' + '-'
          + '[' + datetime.now().now().isoformat().split('.')[0] + ']' + '-'
          + infostr)
    pass


def infodecor(func):
    def __decorator(*args):
        info("enter " + func.__name__)
        result = func(*args)
        info("exit " + func.__name__)
        return result
    return __decorator

